import React from 'react'
import {connect} from 'react-redux'
import {ListItem} from '../style/dashboard'
import {ExpandButton} from '../style/base'
import {WhiteMinus, WhitePlus } from '../style/icons'

type TagType = { recipeUrl: string; parent: string; ingredient: string; servings: number }
type PropsType = {tag: TagType}
export default function TagItem(props: PropsType) {
    return(
        <ListItem >
            {props.tag.parent + " - " + props.tag.ingredient + " - " + props.tag.servings + " servings" }
            <ExpandButton>
                <WhiteMinus />
            </ExpandButton>
            <ExpandButton>
                <WhitePlus />
            </ExpandButton>
            
        </ListItem>
    )
}