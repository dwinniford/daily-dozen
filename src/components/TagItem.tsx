import React from 'react'
import {connect} from 'react-redux'
import {ListItem} from '../style/dashboard'
import {ExpandButton} from '../style/base'
import {WhiteMinus, WhitePlus } from '../style/icons'

type TagType = { recipeUrl: string; parent: string; ingredient: string; servings: number }
type PropsType = {tag: TagType, incrementTag: Function, decrementTag: Function}
function TagItem(props: PropsType) {

    const minusTag = () => {
        if(props.tag.servings > 1) {
            props.decrementTag(props.tag)
        }
    }

    return(
        <ListItem >
            {props.tag.parent + " - " + props.tag.ingredient + " - " + props.tag.servings + " servings" }
            <ExpandButton>
                <WhiteMinus onClick={(event: {}) => minusTag()} />
            </ExpandButton>
            <ExpandButton>
                <WhitePlus onClick={(event: {}) => props.incrementTag(props.tag)} />
            </ExpandButton>
            
        </ListItem>
    )
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        incrementTag: (tag: TagType) => dispatch({type: "INCREMENT_TAG", tag}),
        decrementTag: (tag: TagType) => dispatch({type: "DECREMENT_TAG", tag})
    }
}

export default connect(null, mapDispatchToProps)(TagItem)