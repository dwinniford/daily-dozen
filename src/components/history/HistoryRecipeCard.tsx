import React, {useState} from 'react'
import { Subtitle, ExpandButton, PositionTopRight} from '../../style/base.js'
import {CardHolder} from '../../style/dashboard'
import {WhiteChevronRight} from '../../style/icons'

import RecipeInfoCard from './HistoryRecipeInfoCard'

type RecipeType = {label: string, source: string, ingredientLines: string[], 
    // tags: { parent: string; ingredient: string; }[], 
    url: string, image: string;}
type RecipeCardProps = {recipe: RecipeType, tags: {recipeUrl: string, parent:string, ingredient: string, servings: number}[] }

function HistoryRecipeCard(props: RecipeCardProps) {
    
    const [display, toggleDisplay] = useState(false)
    const handleToggle = () => {
        display ? toggleDisplay(false) : toggleDisplay(true)
    }


    const chevron = () => {
        return display ? <WhiteChevronRight down="true" title="collapse recipe"/> : <WhiteChevronRight title="expand recipe" />
    }

    return (
        <CardHolder>
            <Subtitle>
                {props.recipe.label}
            </Subtitle>
            <PositionTopRight>
                <ExpandButton onClick={(event: {}) => handleToggle()} key={props.recipe.label+"-"+props.recipe.source}> {chevron()}</ExpandButton>
            </PositionTopRight>
            
            {display? <RecipeInfoCard recipe={props.recipe} expand={true} tags={props.tags} /> : <RecipeInfoCard recipe={props.recipe} expand={false} tags={props.tags}  /> }
        </CardHolder>
    )
}

export default HistoryRecipeCard
