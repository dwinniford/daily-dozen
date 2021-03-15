import React, {useState, useEffect, useRef} from 'react'
import {ListItem, CollapseHolder, CollapseInner, RecipeImg} from '../style/dashboard'
import { BlackButton, ExternalLink} from '../style/base.js'
import RecipeTags from './RecipeTags'

type RecipeInfoCardProps = {recipe: {ingredientLines: string[], tags: {parent: string, ingredient: string}[], url: string, source: string, image: string, label: string }, expand: boolean }

export default function RecipeInfoCard(props: RecipeInfoCardProps) {
    const innerRef: any = useRef(null)
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
        // console.log("perform side effect", innerRef.current.clientHeight, childrenColl, childrenHeight)
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
        <CollapseHolder expand={props.expand} height={innerHeight}>
            <CollapseInner ref={innerRef}>
                <ExternalLink href={props.recipe.url}>
                    from {props.recipe.source}
                </ExternalLink>
                <RecipeImg src={props.recipe.image} alt={props.recipe.label} />
                
                <BlackButton onClick={(event: {}) => tabClick(event, "Ingredients")}>Ingredients</BlackButton>
                <BlackButton onClick={(event: {}) => tabClick(event, "Tags")}>Tags</BlackButton>
                {/* {renderIngredients()} */}
                {displayTab()}
            </CollapseInner>
        </CollapseHolder>
    )
}