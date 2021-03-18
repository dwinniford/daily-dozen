import React from 'react'
import {EmptyCircle, WhiteCheckCircle} from '../style/icons'
import {connect} from 'react-redux'

type MealPlanType = {tags: {parent: string}[]}
type PropsType = {parent: string, servingQuantity: number}
function ServingCounter(props: PropsType) {

    const servings = () => {
        
    }
    return(
        <EmptyCircle/>
    )
}

type StateType = {mealPlan: MealPlanType}
const mapStateToProps = (state: StateType) => {
    return {
        tags: state.mealPlan.tags
    }
}

export default connect(mapStateToProps)(ServingCounter)