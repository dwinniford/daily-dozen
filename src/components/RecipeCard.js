import React, {useState} from 'react'
import { BlackButton} from '../style/base.js'

import RecipeInfoCard from './RecipeInfoCard'

export default function RecipeCard(props) {
    
    const [display, toggleDisplay] = useState(false)
    const handleToggle = () => {
        display ? toggleDisplay(false) : toggleDisplay(true)
    }
    const buttonText = () => {
        return display ? "Hide" : props.recipe.label
    }
    return (
        <div>
            <BlackButton onClick={(event) => handleToggle()} key={props.recipe.label+"-"+props.recipe.source}>{buttonText()}</BlackButton>
            {display? <RecipeInfoCard recipe={props.recipe} /> : null }
        </div>
    )
}
