import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {SearchResultsGrid, DashboardBlock} from '../style/dashboard'
import {MessageHolder} from '../style/base'
import RecipeCard from '../components/RecipeCard'
import MealPlanTitle from './MealPlanTitle'

type RecipeProps = {label: string, source: string, ingredientLines: string[], tags: { parent: string; ingredient: string; }[], url: string, image: string;}
type MealPlanProps = {recipes: RecipeProps[], message: string}
function MealPlan(props: MealPlanProps) {
    // const [displayed, toggleDisplayed] = useState(false)
    const [opacity, toggleOpacity] = useState(0)

    useEffect(function() {
        if(props.message.length) {
            toggleOpacity(1)
            setTimeout(function() {
                console.log("toggle message opacity to 0")
                toggleOpacity(0)
            }, 2000)
        }
    }, [props.message.length])

    return (
        <DashboardBlock>
            <MealPlanTitle />
            <MessageHolder opacity={opacity}>{props.message}</MessageHolder>
            <SearchResultsGrid>
                {props.recipes.map(r => <RecipeCard key={r.label+"-"+r.source} recipe={r} inMealPlan={true} />)}
            </SearchResultsGrid>
        </ DashboardBlock>
    )
}

const mapStateToProps = (state: {mealPlan: {recipes: RecipeProps[], message: string} }) => {
    return {
        recipes: state.mealPlan.recipes,
        message: state.mealPlan.message
    }
}

export default connect(mapStateToProps)(MealPlan) 
