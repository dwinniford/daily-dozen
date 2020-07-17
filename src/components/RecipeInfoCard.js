import React from 'react'
import {ListItem} from '../style/dashboard'

export default function RecipeInfoCard(props) {
    
    const renderIngredients = () => {
        return props.recipe.ingredientLines.map( i => {
        return <ListItem key={i}>{i}</ListItem>
        })
    }
    
    return (
        <div>
            <img src={props.recipe.image} alt={props.recipe.label} />
            <a href={props.recipe.url}>{props.recipe.source}</a>
            {renderIngredients()}
        </div>
    )
}
