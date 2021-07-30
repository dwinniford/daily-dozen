import React, {useState} from 'react'
import { Title, SuperScriptButton } from '../style/base'
import {EditPencil, SaveDisk} from '../style/icons'
import {TitleHolder, FormInput} from '../style/dashboard'
import {connect} from 'react-redux'

type PropsType = {mealPlanTitle: string, updateTitle: Function}
function MealPlanTitle(props: PropsType) {
    const [edit, setEdit] = useState(false)
    const [title, setTitle] = useState("")

    const toggleEdit = () => {
        edit? setEdit(false) : setEdit(true)
        console.log("toggle", edit)
    }

    const handleFormChange = (event: React.FormEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const saveTitle = () => {
        // set meal plan title in redux
        props.updateTitle(title)
        toggleEdit()
    }

    
    return (
        <TitleHolder>
            {edit? <FormInput placeholder="title" onChange={handleFormChange} value={title} /> : <Title>{props.mealPlanTitle.length? props.mealPlanTitle : "Meal Plan"}</Title>}
            {edit? <SuperScriptButton onClick={saveTitle}><SaveDisk title="save title" /></SuperScriptButton> : <SuperScriptButton onClick={toggleEdit} ><EditPencil title="edit title" /></SuperScriptButton>}
        </TitleHolder>
    )
}

type StateType = {mealPlan: {title: string}}
const mapStateToProps = (state: StateType) => {
    return {
        mealPlanTitle: state.mealPlan.title
    }
}
const mapDispatchToProps = (dispatch: Function) => {
    return {
        updateTitle: (title: string) => dispatch({type: "UPDATE_TITLE", title})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealPlanTitle)