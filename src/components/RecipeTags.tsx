import React from 'react'
import {connect} from 'react-redux'
import {ListItem} from '../style/dashboard'
import TagForm from './TagForm'

type RecipeTagsProps = {
    recipe: {tags: {parent: string, ingredient: string }[], url: string}, 
    searchIngredients: {parent: string, ingredient: string }[], 
    tags: {recipeUrl: string, parent:string, ingredient: string}[]
}

type StateProps = {builder: {ingredients: {parent: string, ingredient: string }[]}, mealPlan: {tags: {recipeUrl: string, parent: string, ingredient: string}[]}}

function RecipeTags(props: RecipeTagsProps) {
    // check if tags array exists
    const tags = () => {
        return props.tags.filter( t => t.recipeUrl === props.recipe.url )
    }
    return (
        <div>
            <TagForm recipeUrl={props.recipe.url}></TagForm>
            {tags().map(t => <ListItem key={t.parent + "-" + t.ingredient}>{t.parent + " - " + t.ingredient }</ListItem>)}
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