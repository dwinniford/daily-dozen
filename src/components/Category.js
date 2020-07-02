import React, { useState} from 'react'
import {BlackButton} from '../style/base.js'
import TypesCard from './TypesCard.js'
import {EmptyCounter, CategoryHead } from '../style/dashboard.js'


export default function Category(props) {
    const [display, toggleDisplay] = useState(false)
    const renderTypes = () => {
        return <TypesCard types={props.category.types} />
    }
    const handleToggle = () => {
        display ? toggleDisplay(false) : toggleDisplay(true)
    }

    const servings = () => {
        let servingsArray = []
        let i = 1
        while (i <= props.category.servings.quantity) {
            servingsArray.push(<EmptyCounter></EmptyCounter>)
            i ++
        }
        return servingsArray 
    }

    return (
        <div>
            <CategoryHead>
            <BlackButton onClick={handleToggle}>{props.category.name} </BlackButton>
            <div>
            {servings()}
            </div>
            
            </CategoryHead>
            {display ? renderTypes() : null}
        </div>
    )
}
