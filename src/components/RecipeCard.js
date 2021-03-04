import React, {useState} from 'react'
import { Subtitle, ExpandButton} from '../style/base.js'
import {CardHolder} from '../style/dashboard'
import {WhiteChevronRight} from '../style/icons'

import RecipeInfoCard from './RecipeInfoCard'

export default function RecipeCard(props) {
    
    const [display, toggleDisplay] = useState(false)
    const handleToggle = () => {
        display ? toggleDisplay(false) : toggleDisplay(true)
    }
    // const buttonText = () => {
    //     return display ? "Hide" : props.recipe.label
    // }

    const chevron = () => {
        return display ? <WhiteChevronRight down="true" title="collapse recipe"/> : <WhiteChevronRight title="expand recipe" />
    }
    return (
        <CardHolder>
            <Subtitle>
                {props.recipe.label}
            </Subtitle>
            <ExpandButton onClick={(event) => handleToggle()} key={props.recipe.label+"-"+props.recipe.source}> {chevron()}</ExpandButton>
            {display? <RecipeInfoCard recipe={props.recipe} expand={true} /> : <RecipeInfoCard recipe={props.recipe} expand={false} /> }
        </CardHolder>
    )
}
