import React from 'react'
// import {connect} from 'react-redux'
import {SearchResultsGrid, DashboardBlock} from '../style/dashboard'
import { BlackButton, Title} from '../style/base'
import HistoryRecipeCard from '../components/history/HistoryRecipeCard'
import HistoryMealPlanTitle from '../components/history/HistoryMealPlanTitle'
// import MealPlanTitle from './MealPlanTitle'
import { useQuery, useMutation} from '@apollo/client'
// import CREATE_MEAL_PLAN from '../gql/mutations/createMealPlan'
import DELETE_MEAL_PLAN from '../gql/mutations/deleteMealPlan'
import MEAl_PLAN_SHOW from '../gql/queries/mealPlanShow'
import ME from '../gql/queries/me'
// import {Redirect} from 'react-router-dom'


type RecipeProps = { label: string, source: string, ingredientLines: string[], url: string, image: string;}
type TagProps = { parent: string; ingredient: string; }[]
type MealPlanProps = { id: string }
function HistoryDetail(props: MealPlanProps) {
    const {loading, data, error} = useQuery(MEAl_PLAN_SHOW, {variables: {id: props.id}})
    const [deleteMealPlan, deleteStatus] = useMutation(DELETE_MEAL_PLAN, {errorPolicy: 'all', refetchQueries: [{query: ME}], awaitRefetchQueries: true})

    

    if(loading) {
        return <Title>Loading Meal Plan</Title>
    }
    if(error) {
        console.log(error.graphQLErrors)
        return <Title>Error Loading Meal Plan</Title>
    }    
    
    const handleDelete = () => {
        deleteMealPlan({variables: {id: data.mealPlanShow.id}})
    }
    if(deleteStatus.loading) {
        console.log("processing delete")
    }
    if(deleteStatus.error) {
        console.log(deleteStatus.error.graphQLErrors)
    }
    if(deleteStatus.data) {
        console.log(deleteStatus.data)
        return <Title>Meal Plan deleted. Select a new Meal Plan.</Title>
    }

    return (
        <DashboardBlock>
            <HistoryMealPlanTitle mealPlanTitle={data.mealPlanShow.title} />
            <SearchResultsGrid>
                {data.mealPlanShow.recipes.map((r: RecipeProps) => <HistoryRecipeCard key={r.label+"-"+r.source} recipe={r} tags={data.mealPlanShow.tags} />)}
            </SearchResultsGrid>
            <BlackButton >Update Meal Plan</BlackButton>
            <BlackButton onClick={handleDelete} >Delete Meal Plan</BlackButton>
        </ DashboardBlock>
    )
}


export default HistoryDetail
