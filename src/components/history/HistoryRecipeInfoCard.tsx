import React, {useState} from 'react'
import {ListItem, RecipeImg} from '../../style/dashboard'
import { BlackButton, ExternalLink} from '../../style/base.js'
import HistoryRecipeTags from './HistoryRecipeTags'
import {UnmountClosed} from 'react-collapse'


type RecipeInfoCardProps = {
    recipe: {ingredientLines: string[], url: string, source: string, image: string, label: string }, 
    expand: boolean,
    tags: {recipeUrl: string, parent:string, ingredient: string, servings: number}[]
}

export default function HistoryRecipeInfoCard(props: RecipeInfoCardProps) {
    

    const [display, toggleDisplay] = useState("Ingredients")
    
    const renderIngredients = () => {
        return props.recipe.ingredientLines.map( i => {
        return <ListItem key={i}>{i}</ListItem>
        })
    }
    const tabClick = (event: {}, text: string) => {
        // console.log(text)
        toggleDisplay(text)
    }

    const displayTab = () => {
        switch(display) {
            case "Ingredients":
                return renderIngredients();
            case "Tags":
                return <HistoryRecipeTags recipe={props.recipe} tags={props.tags} />
            default:
                return null 
        }
    }
    
    return (
            <UnmountClosed isOpened={props.expand} initialStyle={{height: '0px', overflow: 'hidden'}} >
                <ExternalLink href={props.recipe.url}>
                    from {props.recipe.source}
                </ExternalLink>
                <div>
                    <RecipeImg src={props.recipe.image} alt={props.recipe.label} />
                </div>
                
                <div>
                    <BlackButton onClick={(event: {}) => tabClick(event, "Ingredients")}>Ingredients</BlackButton>
                    <BlackButton onClick={(event: {}) => tabClick(event, "Tags")}>Tags</BlackButton>
                </div>
                {displayTab()}
            </UnmountClosed>
    )
}
