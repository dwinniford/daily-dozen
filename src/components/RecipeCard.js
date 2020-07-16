import React from 'react'
import { BlackButton} from '../style/base.js'

export default function RecipeCard(props) {
    return (
        <div>
            <BlackButton key={props.recipe.label+"-"+props.recipe.source}>{props.recipe.label}</BlackButton>
            <p>Ingredients here</p>
        </div>
    )
}
