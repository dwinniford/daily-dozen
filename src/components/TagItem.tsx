import React from 'react'
import {connect} from 'react-redux'
import {ListItem} from '../style/dashboard'

type TagType = { recipeUrl: string; parent: string; ingredient: string; servings: number }
type PropsType = {tag: TagType}
export default function TagItem(props: PropsType) {
    return(
        <ListItem >{props.tag.parent + " - " + props.tag.ingredient + " - " + props.tag.servings + " servings" }</ListItem>
    )
}