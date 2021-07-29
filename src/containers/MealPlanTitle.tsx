import React from 'react'
import { Title, SuperScriptButton } from '../style/base'
import {EditPencil} from '../style/icons'
import {TitleHolder} from '../style/dashboard'

function MealPlanTitle() {
    return (
        <TitleHolder>
            <Title>Meal Plan</Title>
            <SuperScriptButton>
                <EditPencil title="edit title" />
            </SuperScriptButton>
        </TitleHolder>
    )
}

export default MealPlanTitle