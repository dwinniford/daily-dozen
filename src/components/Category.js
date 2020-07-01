import React, { useState} from 'react'
import {BlackButton} from '../style/base.js'


export default function Category(props) {
    const [display, toggleDisplay] = useState(false)
    const renderTypes = () => {
        return "Types of food test"
    }
    const handleToggle = () => {
        display ? toggleDisplay(false) : toggleDisplay(true)
    }

    return (
        <div>
            <BlackButton onClick={handleToggle}>{props.category.name}</BlackButton>
            {display ? renderTypes() : null}
        </div>
    )
}
