import React, {useState} from 'react'
import { BlackButton} from '../style/base.js'
import {WhiteChevronRight} from '../style/icons'

import RecipeInfoCard from './RecipeInfoCard'

export default function RecipeCard(props) {
    
    const [display, toggleDisplay] = useState(false)
    const handleToggle = () => {
        display ? toggleDisplay(false) : toggleDisplay(true)
    }
    const buttonText = () => {
        return display ? "Hide" : props.recipe.label
    }

    const chevron = () => {
        return display ? <WhiteChevronRight down="true" /> : <WhiteChevronRight />
    }
    return (
        <div>
            <BlackButton onClick={(event) => handleToggle()} key={props.recipe.label+"-"+props.recipe.source}>{buttonText()} {chevron()}</BlackButton>
            {display? <RecipeInfoCard recipe={props.recipe} /> : null }
        </div>
    )
}
