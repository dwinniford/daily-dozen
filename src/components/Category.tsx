import React, { useState} from 'react'
import {BlackButton} from '../style/base.js'
import TypesCard from './TypesCard'
import ServingCounter from './ServingCounter'
import {CategoryHead } from '../style/dashboard.js'
import {UnmountClosed} from 'react-collapse'
import {WhiteChevronRight} from '../style/icons'



type CategoryProps = { category: {name: string, types: string[], servings: {quantity: number, used: number}}}
export default function Category(props: CategoryProps) {
    const [display, toggleDisplay] = useState(false)
    
    const handleToggle = () => {
        display ? toggleDisplay(false) : toggleDisplay(true)
    }

    const chevron = () => {
        return display ? <WhiteChevronRight down="true" title="collapse category"/> : <WhiteChevronRight title="expand category" />
    }

    return (
        <div>
            <CategoryHead>
            <BlackButton onClick={handleToggle}>{props.category.name} {chevron()}</BlackButton>
            <ServingCounter parent={props.category.name} servingQuantity={props.category.servings.quantity} />
            </CategoryHead>
            <UnmountClosed isOpened={display} initialStyle={{height: '0px', overflow: 'hidden'}} >
                <TypesCard types={props.category.types} parent={props.category.name} />
            </UnmountClosed>
        </div>
    )
}


