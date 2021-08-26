import React from 'react'
// import {connect} from 'react-redux'
import {SearchResultsGrid, DashboardBlock} from '../style/dashboard'
import { BlackButton, Title} from '../style/base'
import RecipeCard from '../components/RecipeCard'
// import MealPlanTitle from './MealPlanTitle'
import { useQuery} from '@apollo/client'
// import CREATE_MEAL_PLAN from '../gql/mutations/createMealPlan'
import MEAl_PLAN_SHOW from '../gql/queries/mealPlanShow'
// import {Redirect} from 'react-router-dom'


type RecipeProps = { label: string, source: string, ingredientLines: string[], url: string, image: string;}
type TagProps = { parent: string; ingredient: string; }[]
type MealPlanProps = { id: string }
function HistoryDetail(props: MealPlanProps) {
    const {loading, data, error} = useQuery(MEAl_PLAN_SHOW, {variables: {id: props.id}})

    if(loading) {
        return <Title>Loading Meal Plan</Title>
    }
    if(error) {
        console.log(error.graphQLErrors)
        return <Title>Error Loading Meal Plan</Title>
    }    
    return (
        <DashboardBlock>
            <Title>{data.mealPlanShow.title}</Title>
            <SearchResultsGrid>
                {data.mealPlanShow.recipes.map((r: RecipeProps) => <RecipeCard key={r.label+"-"+r.source} recipe={r} inMealPlan={true} />)}
            </SearchResultsGrid>
            <BlackButton >Update Meal Plan</BlackButton>
        </ DashboardBlock>
    )
}


export default HistoryDetail
