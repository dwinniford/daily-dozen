import React, {useState, useEffect, useRef} from 'react'
import {ListItem, CollapseHolder, CollapseInner, RecipeImg} from '../style/dashboard'
import { BlackButton, ExternalLinkButton} from '../style/base.js'
import RecipeTags from './RecipeTags'

export default function RecipeInfoCard(props) {
    const innerRef = useRef(null)
    const [innerHeight, setInnerHeight] = useState(0)

    useEffect(()=> {
        let childrenHeight = 0
        const childrenColl = innerRef.current.children
        for (let index = 0; index < childrenColl.length; index++) {
            childrenHeight += childrenColl[index].clientHeight
        }
        
        // const childrenHeight = innerRef.current.children.map(function(i){
        //     return i.clientHeight
        // })
        console.log("perform side effect", innerRef.current.clientHeight, childrenColl, childrenHeight)
        // set height prop on Collapse holder
        // setInnerHeight(innerRef.current.offsetHeight)
        setInnerHeight(childrenHeight)
        //prevent infinite loop
    }, [])

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
        <CollapseHolder expand={props.expand} height={innerHeight}>
            <CollapseInner ref={innerRef}>
                <RecipeImg src={props.recipe.image} alt={props.recipe.label} />
                
                <ExternalLinkButton href={props.recipe.url}>
                    {props.recipe.label} from {props.recipe.source}
                </ExternalLinkButton>
                <BlackButton onClick={(event) => tabClick(event)}>Ingredients</BlackButton>
                <BlackButton onClick={(event) => tabClick(event)}>Tags</BlackButton>
                {/* {renderIngredients()} */}
                {displayTab()}
            </CollapseInner>
        </CollapseHolder>
    )
}
