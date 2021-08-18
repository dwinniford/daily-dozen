import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {SearchResultsGrid, DashboardBlock} from '../style/dashboard'
import {MessageHolder, BlackButton, Title} from '../style/base'
import RecipeCard from '../components/RecipeCard'
import MealPlanTitle from './MealPlanTitle'
import {useMutation} from '@apollo/client'
import CREATE_MEAL_PLAN from '../gql/mutations/createMealPlan'
import {Redirect} from 'react-router-dom'


type RecipeProps = {label: string, source: string, ingredientLines: string[], tags: { parent: string; ingredient: string; }[], url: string, image: string;}
type TagProps = {}
type MealPlanProps = {recipes: RecipeProps[], message: string, tags: TagProps[], title: string}
function MealPlan(props: MealPlanProps) {
    // const [displayed, toggleDisplayed] = useState(false)
    const [opacity, toggleOpacity] = useState(0)
    const [createMealPlan, {data, loading, error, called}] = useMutation(CREATE_MEAL_PLAN, {errorPolicy: 'all'})

    useEffect(function() {
        if(props.message.length) {
            toggleOpacity(1)
            setTimeout(function() {
                console.log("toggle message opacity to 0")
                toggleOpacity(0)
            }, 2000)
        }
    }, [props.message.length])

    const handleSave = () => {
        createMealPlan({variables: {
            title: props.title,
            recipes: props.recipes,
            tags: props.tags
            }
        })
    }


    if(error) {
        console.log("error", error.graphQLErrors)
        return <Title>There was an error saving the meal plan.</Title>
    }
    if(loading) {
        return <Title>Loading</Title>
    }
    if(called) {
        console.log("completed, data= ", data)
        return (
            <Redirect to="/history" />
        )
    }

    return (
        <DashboardBlock>
            <MealPlanTitle />
            <MessageHolder opacity={opacity}>{props.message}</MessageHolder>
            <SearchResultsGrid>
                {props.recipes.map(r => <RecipeCard key={r.label+"-"+r.source} recipe={r} inMealPlan={true} />)}
            </SearchResultsGrid>
            <BlackButton onClick={handleSave} >Save Meal Plan</BlackButton>
        </ DashboardBlock>
    )
}

const mapStateToProps = (state: {mealPlan: {recipes: RecipeProps[], message: string, tags: TagProps[], title: string} }) => {
    return {
        recipes: state.mealPlan.recipes,
        message: state.mealPlan.message,
        tags: state.mealPlan.tags,
        title: state.mealPlan.title
    }
}

export default connect(mapStateToProps)(MealPlan) 
