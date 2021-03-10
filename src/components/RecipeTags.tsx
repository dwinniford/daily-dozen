import React from 'react'
import {connect} from 'react-redux'
import {ListItem} from '../style/dashboard'
import TagForm from './TagForm'

type RecipeTagsProps = {recipe: {tags: string[]}, searchIngredients: string[]}

type StateProps = {builder: {ingredients: string[]}}

function RecipeTags(props: RecipeTagsProps) {
    // what is going on here??? why the two return possibilities
    const tags = () => {
        if(props.recipe.tags) {
            return props.recipe.tags
        } else {
            return props.searchIngredients
        }
    }
    return (
        <div>
            <TagForm></TagForm>
            {tags().map(t => <ListItem key={t}>{t}</ListItem>)}
        </div>
    )
}

const mapStateToProps = (state: StateProps) => {
    return {
        searchIngredients: state.builder.ingredients 
    }
}

export default connect(mapStateToProps)(RecipeTags)