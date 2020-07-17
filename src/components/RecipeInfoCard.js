import React from 'react'
import {ListItem} from '../style/dashboard'
import { BlackButton, ExternalLinkButton} from '../style/base.js'
import RecipeTags from './RecipeTags'

export default function RecipeInfoCard(props) {
    
    const renderIngredients = () => {
        return props.recipe.ingredientLines.map( i => {
        return <ListItem key={i}>{i}</ListItem>
        })
    }
    
    return (
        <div>
            <img src={props.recipe.image} alt={props.recipe.label} />
            
            <ExternalLinkButton href={props.recipe.url}>
                {props.recipe.label} from {props.recipe.source}
            </ExternalLinkButton>
            
            {renderIngredients()}
            <h3>Tags</h3>
            <RecipeTags recipe={props.recipe} />
        </div>
    )
}
