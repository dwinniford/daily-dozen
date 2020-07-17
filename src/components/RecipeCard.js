import React from 'react'
import { BlackButton} from '../style/base.js'
import {ListItem} from '../style/dashboard'

export default function RecipeCard(props) {
    
    const renderIngredients = () => {
        return props.recipe.ingredientLines.map( i => {
        return <ListItem key={i}>{i}</ListItem>
        })
    }
    
    return (
        <div>
            <BlackButton key={props.recipe.label+"-"+props.recipe.source}>{props.recipe.label}</BlackButton>
            {renderIngredients()}
        </div>
    )
}
