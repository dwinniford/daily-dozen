import React from 'react'
import {connect} from 'react-redux'
import {SearchResultsGrid} from '../style/dashboard'
import RecipeCard from '../components/RecipeCard'

type RecipeProps = {label: string, source: string, ingredientLines: string[], tags: { parent: string; ingredient: string; }[], url: string, image: string;}
type MealPlanProps = {recipes: RecipeProps[]}
function MealPlan(props: MealPlanProps) {
    return (
        <SearchResultsGrid>
            {props.recipes.map(r => <RecipeCard key={r.label+"-"+r.source} recipe={r} />)}
        </SearchResultsGrid>
    )
}

const mapStateToProps = (state: {mealPlan: {recipes: RecipeProps[]} }) => {
    return {
        recipes: state.mealPlan.recipes
    }
}

export default connect(mapStateToProps)(MealPlan) 
