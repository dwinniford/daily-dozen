import React, {useState} from 'react'
import { Title, SuperScriptButton } from '../../style/base'
import {EditPencil, SaveDisk} from '../../style/icons'
import {TitleHolder, FormInput} from '../../style/dashboard'

type PropsType = {mealPlanTitle: string}
function HistoryMealPlanTitle(props: PropsType) {
    const [edit, setEdit] = useState(false)
    const [title, setTitle] = useState(props.mealPlanTitle)

    const toggleEdit = () => {
        edit? setEdit(false) : setEdit(true)
        console.log("toggle", edit)
    }

    const handleFormChange = (event: React.FormEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const saveTitle = () => {
        // save meal plan title in with apollo client
        console.log("saving new title")
        toggleEdit()
    }

    
    return (
        <TitleHolder>
            {edit? <FormInput placeholder="title" onChange={handleFormChange} value={title} /> : <Title>{props.mealPlanTitle.length? props.mealPlanTitle : "Meal Plan"}</Title>}
            {edit? <SuperScriptButton onClick={saveTitle}><SaveDisk title="save title" /></SuperScriptButton> : <SuperScriptButton onClick={toggleEdit} ><EditPencil title="edit title" /></SuperScriptButton>}
        </TitleHolder>
    )
}

export default HistoryMealPlanTitle