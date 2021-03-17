import React, {useState} from 'react'
import { connect } from 'react-redux'
import { Subtitle, ExpandButton, PositionTopRight} from '../style/base.js'
import {CardHolder} from '../style/dashboard'
import {WhiteChevronRight, WhitePlus, WhiteX} from '../style/icons'

import RecipeInfoCard from './RecipeInfoCard'

type RecipeType = {label: string, source: string, ingredientLines: string[], tags: { parent: string; ingredient: string; }[], url: string, image: string;}
type RecipeCardProps = {recipe: RecipeType, addToMealPlan: Function, inMealPlan: boolean, removeFromMealPlan: Function }

function RecipeCard(props: RecipeCardProps) {
    
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
        // console.log("add to meal plan ", props.recipe)
        props.addToMealPlan(props.recipe)
    }

    const handleRemoveFromMealPlan = () => {
        props.removeFromMealPlan(props.recipe.url)
    }

    const addOrX = () => {
        if(props.inMealPlan) {
            return <ExpandButton onClick={(event: {}) => handleRemoveFromMealPlan()} ><WhiteX title={`remove ${props.recipe.label} from Meal Plan`} /></ExpandButton>
        } else {
            return <ExpandButton onClick={(event: {}) => handleAddToMealPlan()} ><WhitePlus title={`add ${props.recipe.label} to Meal Plan`} /></ExpandButton>
        }
    }

    return (
        <CardHolder>
            <Subtitle>
                {props.recipe.label}
            </Subtitle>
            <PositionTopRight>
                {addOrX()}
                <ExpandButton onClick={(event: {}) => handleToggle()} key={props.recipe.label+"-"+props.recipe.source}> {chevron()}</ExpandButton>
            </PositionTopRight>
            
            {display? <RecipeInfoCard recipe={props.recipe} expand={true} inMealPlan={props.inMealPlan} /> : <RecipeInfoCard recipe={props.recipe} expand={false} inMealPlan={props.inMealPlan} /> }
        </CardHolder>
    )
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        addToMealPlan: (recipe: RecipeType) => dispatch({type: "ADD_TO_MEAL_PLAN", recipe}),
        removeFromMealPlan: (url: string) => dispatch({type: "REMOVE_FROM_MEAL_PLAN", url})
    }
}

export default connect(null, mapDispatchToProps)(RecipeCard)
