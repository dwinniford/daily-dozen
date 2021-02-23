import React from 'react'
import {connect} from 'react-redux'
import {ListItem} from '../style/dashboard'
import TagForm from './TagForm'

function RecipeTags(props) {
    
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

const mapStateToProps = (state) => {
    return {
        searchIngredients: state.builder.ingredients 
    }
}

export default connect(mapStateToProps)(RecipeTags)