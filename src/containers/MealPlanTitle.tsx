import React, {useState} from 'react'
import { Title, SuperScriptButton } from '../style/base'
import {EditPencil} from '../style/icons'
import {TitleHolder, FormInput} from '../style/dashboard'

function MealPlanTitle() {
    const [edit, setEdit] = useState(false)
    const [title, setTitle] = useState("Meal Plan")

    const toggleEdit = () => {
        edit? setEdit(false) : setEdit(true)
        console.log("toggle", edit)
    }

    
    return (
        <TitleHolder>
            {edit? <FormInput placeholder="title" /> : <Title>Meal Plan</Title>}
            <SuperScriptButton onClick={toggleEdit} >
                <EditPencil title="edit title" />
            </SuperScriptButton>
        </TitleHolder>
    )
}

export default MealPlanTitle