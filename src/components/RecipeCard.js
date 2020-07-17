import React, {useState} from 'react'
import { BlackButton} from '../style/base.js'
import {ListItem} from '../style/dashboard'

export default function RecipeCard(props) {
    
    const [display, toggleDisplay] = useState(false)
    const handleToggle = () => {
        display ? toggleDisplay(false) : toggleDisplay(true)
    }

    const renderIngredients = () => {
        return props.recipe.ingredientLines.map( i => {
        return <ListItem key={i}>{i}</ListItem>
        })
    }
    
    return (
        <div>
            <BlackButton onClick={(event) => handleToggle()} key={props.recipe.label+"-"+props.recipe.source}>{props.recipe.label}</BlackButton>
            {display? renderIngredients() : null }
        </div>
    )
}
