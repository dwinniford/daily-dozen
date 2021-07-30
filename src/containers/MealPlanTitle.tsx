import React, {useState} from 'react'
import { Title, SuperScriptButton } from '../style/base'
import {EditPencil} from '../style/icons'
import {TitleHolder, FormInput} from '../style/dashboard'

function MealPlanTitle() {
    const [edit, setEdit] = useState(false)
    const [title, setTitle] = useState("")

    const toggleEdit = () => {
        edit? setEdit(false) : setEdit(true)
        console.log("toggle", edit)
    }

    const handleFormChange = (event: React.FormEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    
    return (
        <TitleHolder>
            {edit? <FormInput placeholder="title" onChange={handleFormChange} value={title} /> : <Title>{title.length? title : "Meal Plan"}</Title>}
            <SuperScriptButton onClick={toggleEdit} >
                <EditPencil title="edit title" />
            </SuperScriptButton>
        </TitleHolder>
    )
}

export default MealPlanTitle