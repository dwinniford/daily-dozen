import React from 'react'
import {connect} from 'react-redux'
import {SearchResultsGrid, DashboardBlock} from '../style/dashboard'
import {Title, MessageHolder} from '../style/base'
import RecipeCard from '../components/RecipeCard'

type RecipeProps = {label: string, source: string, ingredientLines: string[], tags: { parent: string; ingredient: string; }[], url: string, image: string;}
type MealPlanProps = {recipes: RecipeProps[], message: string}
function MealPlan(props: MealPlanProps) {


    return (
        <DashboardBlock>
            <Title>Meal Plan</Title>
            <MessageHolder>{props.message}</MessageHolder>
            <SearchResultsGrid>
                {props.recipes.map(r => <RecipeCard key={r.label+"-"+r.source} recipe={r} />)}
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
