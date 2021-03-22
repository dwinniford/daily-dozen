import React, { useState} from 'react'
import {BlackButton} from '../style/base.js'
import TypesCard from './TypesCard'
import ServingCounter from './ServingCounter'
import {CategoryHead } from '../style/dashboard.js'



type CategoryProps = { category: {name: string, types: string[], servings: {quantity: number, used: number}}}
export default function Category(props: CategoryProps) {
    const [display, toggleDisplay] = useState(false)
    const renderTypes = () => {
        return <TypesCard types={props.category.types} parent={props.category.name} />
    }
    const handleToggle = () => {
        display ? toggleDisplay(false) : toggleDisplay(true)
    }

    return (
        <div>
            <CategoryHead>
            <BlackButton onClick={handleToggle}>{props.category.name} </BlackButton>
            <ServingCounter parent={props.category.name} servingQuantity={props.category.servings.quantity} />
            </CategoryHead>
            {display ? renderTypes() : null}
        </div>
    )
}


