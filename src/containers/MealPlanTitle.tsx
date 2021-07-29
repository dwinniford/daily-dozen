import React from 'react'
import { Title } from '../style/base'
import {EditTitle} from '../style/icons'
import {TitleHolder} from '../style/dashboard'

function MealPlanTitle() {
    return (
        <TitleHolder>
            <Title>Meal Plan</Title>
            <EditTitle title="edit title" />
        </TitleHolder>
    )
}

export default MealPlanTitle