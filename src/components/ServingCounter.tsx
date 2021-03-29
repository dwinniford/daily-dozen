import React from 'react'
import {EmptyCircle, WhiteCheckCircle} from '../style/icons'
import {connect} from 'react-redux'

type TagsType = {parent: string, servings: number}[]
type MealPlanType = {tags: TagsType}
type PropsType = {parent: string, servingQuantity: number, tags: TagsType}
function ServingCounter(props: PropsType) {

    const servings = () => {
        // count the number of tags with parent === parent
        let servingsArray = []
        let i = 1
        let totalServings = 0
        let filteredTags = props.tags.filter(t => t.parent === props.parent)
        filteredTags.forEach((t) => totalServings += t.servings)
        
        while (i <= props.servingQuantity - totalServings) {
            servingsArray.push(<EmptyCircle key={i} title={`unchecked ${props.parent} serving`}></EmptyCircle>)
            i ++
        }
        i = 1 
        while (i <= totalServings) {
            let key = props.parent + "-" + i
            servingsArray.push(<WhiteCheckCircle key={key} title={`checked ${props.parent} serving`}></WhiteCheckCircle>)
            i ++
        }
        return servingsArray 
    }

    return(
        <div>
            {servings()}
        </div> 
    )
}

type StateType = {mealPlan: MealPlanType}
const mapStateToProps = (state: StateType) => {
    return {
        tags: state.mealPlan.tags
    }
}

export default connect(mapStateToProps)(ServingCounter)