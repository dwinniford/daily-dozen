import React, {useState} from 'react'
import { Subtitle, ExpandButton, PositionTopRight} from '../style/base.js'
import {CardHolder} from '../style/dashboard'
import {WhiteChevronRight, WhitePlus} from '../style/icons'

import RecipeInfoCard from './RecipeInfoCard'

type RecipeCardProps = {recipe: {label: string, source: string, ingredientLines: string[], tags: { parent: string; ingredient: string; }[], url: string, image: string;}}

export default function RecipeCard(props: RecipeCardProps) {
    
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

    const handleAddToMealPlan = () => {
        console.log("add to meal plan ", props.recipe)
    }

    return (
        <CardHolder>
            <Subtitle>
                {props.recipe.label}
            </Subtitle>
            <PositionTopRight>
                <ExpandButton onClick={(event: {}) => handleAddToMealPlan()} ><WhitePlus title={`add ${props.recipe.label} to Meal Plan`} /></ExpandButton>
                <ExpandButton onClick={(event: {}) => handleToggle()} key={props.recipe.label+"-"+props.recipe.source}> {chevron()}</ExpandButton>
            </PositionTopRight>
            
            {display? <RecipeInfoCard recipe={props.recipe} expand={true} /> : <RecipeInfoCard recipe={props.recipe} expand={false} /> }
        </CardHolder>
    )
}
