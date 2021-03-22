import React, {useState, useEffect, useCallback} from 'react'
import {EmptyCircle, WhiteCheckCircle} from '../style/icons'
import {connect} from 'react-redux'

type TagsType = {parent: string}[]
type MealPlanType = {tags: TagsType}
type PropsType = {parent: string, servingQuantity: number, tags: TagsType}
function ServingCounter(props: PropsType) {
// do i need the useCallback hook?
    const servings = useCallback(
        () => {
            // count the number of tags with parent === parent
            
            
            

            let servingsArray = []
            let i = 1
            while (i <= props.servingQuantity - (props.tags.filter(t => t.parent === props.parent).length)) {
                servingsArray.push(<EmptyCircle key={i} title={`unchecked ${props.parent} serving`}></EmptyCircle>)
                i ++
            }
            i = 1 
            while (i <= props.tags.filter(t => t.parent === props.parent).length) {
                let key = props.parent + "-" + i
                servingsArray.push(<WhiteCheckCircle key={key} title={`checked ${props.parent} serving`}></WhiteCheckCircle>)
                i ++
            }
            return servingsArray 

        },
        [props.parent, props.tags, props.servingQuantity]
    )

    const [servingsArray, setServingsArray] = useState(servings())

    useEffect(()=> {
        // setFilledServings(props.tags.filter(t => t.parent === props.parent).length)
        // setEmptyServings(props.servingQuantity - (props.tags.filter(t => t.parent === props.parent).length))
        setServingsArray(servings())
        // console.log("filledServings=", filledServings)
    }, [servings])

    
    
    return(
        <div>
            {servingsArray}
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