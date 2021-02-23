import React, {useState} from 'react'
import {ListItem, CollapseHolder} from '../style/dashboard'
import { BlackButton, ExternalLinkButton} from '../style/base.js'
import RecipeTags from './RecipeTags'

export default function RecipeInfoCard(props) {

    const [display, toggleDisplay] = useState("Ingredients")
    // const handleToggle = () => {
    //     display === "ing" ? toggleDisplay("tags") : toggleDisplay("ing")
    // }
    
    const renderIngredients = () => {
        return props.recipe.ingredientLines.map( i => {
        return <ListItem key={i}>{i}</ListItem>
        })
    }
    const tabClick = (event) => {
        toggleDisplay(event.target.innerText)
    }

    const displayTab = () => {
        switch(display) {
            case "Ingredients":
                return renderIngredients();
            case "Tags":
                return <RecipeTags recipe={props.recipe} />
            default:
                return null 
        }
    }
    
    return (
        <CollapseHolder expand={props.expand}>
            <img src={props.recipe.image} alt={props.recipe.label} />
            
            <ExternalLinkButton href={props.recipe.url}>
                {props.recipe.label} from {props.recipe.source}
            </ExternalLinkButton>
            <BlackButton onClick={(event) => tabClick(event)}>Ingredients</BlackButton>
            <BlackButton onClick={(event) => tabClick(event)}>Tags</BlackButton>
            {/* {renderIngredients()} */}
            {displayTab()}
            
        </CollapseHolder>
    )
}
