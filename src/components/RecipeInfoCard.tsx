import React, {useState} from 'react'
import {ListItem, RecipeImg} from '../style/dashboard'
import { BlackButton, ExternalLink} from '../style/base.js'
import RecipeTags from './RecipeTags'
import {UnmountClosed} from 'react-collapse'


type RecipeInfoCardProps = {
    recipe: {ingredientLines: string[], tags: {parent: string, ingredient: string}[], url: string, source: string, image: string, label: string }, 
    expand: boolean,
    inMealPlan: boolean 
}

export default function RecipeInfoCard(props: RecipeInfoCardProps) {
    

    const [display, toggleDisplay] = useState("Ingredients")
    // const handleToggle = () => {
    //     display === "ing" ? toggleDisplay("tags") : toggleDisplay("ing")
    // }
    
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
                return <RecipeTags recipe={props.recipe} />
            default:
                return null 
        }
    }
    
    return (
            <UnmountClosed isOpened={props.expand}>
                <ExternalLink href={props.recipe.url}>
                    from {props.recipe.source}
                </ExternalLink>
                <div>
                    <RecipeImg src={props.recipe.image} alt={props.recipe.label} />
                </div>
                
                <div>
                    <BlackButton onClick={(event: {}) => tabClick(event, "Ingredients")}>Ingredients</BlackButton>
                    { props.inMealPlan ? <BlackButton onClick={(event: {}) => tabClick(event, "Tags")}>Tags</BlackButton> : null }
                </div>

                {/* {renderIngredients()} */}
                {displayTab()}
            </UnmountClosed>
    )
}
