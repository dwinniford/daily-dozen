import React from 'react'
import {ListItem} from '../../style/dashboard'
import {ExpandButton} from '../../style/base'
import {WhiteMinus, WhitePlus } from '../../style/icons'

type TagType = { recipeUrl: string; parent: string; ingredient: string; servings: number }
type PropsType = {tag: TagType}
function HistoryTagItem(props: PropsType) {

    const minusTag = () => {
        if(props.tag.servings > 1) {
            console.log("decrement tag")
        } else {
            console.log("remove tag")
        }
    }
    const incrementTag = () => {
        console.log("increment tag")
    }

    return(
        <ListItem >
            {props.tag.parent + " - " + props.tag.ingredient + " - " + props.tag.servings + " servings" }
            <ExpandButton>
                <WhiteMinus title="decrease servings" onClick={(event: {}) => minusTag()} />
            </ExpandButton>
            <ExpandButton>
                <WhitePlus title="increase servings" onClick={(event: {}) => incrementTag()} />
            </ExpandButton>
            
        </ListItem>
    )
}

export default HistoryTagItem