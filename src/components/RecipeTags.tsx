import React from 'react'
import {connect} from 'react-redux'
import TagForm from './TagForm'
import TagItem from './TagItem'

type RecipeTagsProps = {
    recipe: {url: string}, 
    searchIngredients: {parent: string, ingredient: string }[], 
    tags: {recipeUrl: string, parent:string, ingredient: string, servings: number}[]
}

type StateProps = {builder: {ingredients: {parent: string, ingredient: string }[]}, mealPlan: {tags: {recipeUrl: string, parent: string, ingredient: string, servings: number}[]}}

function RecipeTags(props: RecipeTagsProps) {
    // check if tags array exists
    const tags = () => {
        return props.tags.filter( t => t.recipeUrl === props.recipe.url )
    }
    return (
        <div>
            <TagForm recipeUrl={props.recipe.url}></TagForm>
            {tags().map(t => <TagItem tag={t} key={t.parent + "-" + t.ingredient}></TagItem>)}
        </div>
    )
}

const mapStateToProps = (state: StateProps) => {
    return {
        searchIngredients: state.builder.ingredients,
        tags: state.mealPlan.tags 
    }

}

export default connect(mapStateToProps)(RecipeTags)