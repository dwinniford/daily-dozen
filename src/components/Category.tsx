import React, { useState} from 'react'
import {BlackButton} from '../style/base.js'
import TypesCard from './TypesCard'
import ServingCounter from './ServingCounter'
import {CategoryHead } from '../style/dashboard.js'
import {EmptyCircle, WhiteCheckCircle} from '../style/icons'

type CategoryProps = { category: {name: string, types: string[], servings: {quantity: number, used: number}}}
export default function Category(props: CategoryProps) {
    const [display, toggleDisplay] = useState(false)
    const renderTypes = () => {
        return <TypesCard types={props.category.types} parent={props.category.name} />
    }
    const handleToggle = () => {
        display ? toggleDisplay(false) : toggleDisplay(true)
    }

    const servings = () => {
        let servingsArray = []
        let i = 1
        while (i <= props.category.servings.quantity) {
            servingsArray.push(<EmptyCircle key={i} title={`unchecked ${props.category.name} serving`}></EmptyCircle>)
            i ++
        }
        i = 1 
        while (i <= props.category.servings.used) {
            let key = servingsArray.length + 1
            servingsArray.push(<WhiteCheckCircle key={key} title={`checked ${props.category.name} serving`}></WhiteCheckCircle>)
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
            <ServingCounter parent={props.category.name} servingQuantity={props.category.servings.quantity}/>
            </CategoryHead>
            {display ? renderTypes() : null}
        </div>
    )
}
