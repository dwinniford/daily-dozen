import React from 'react'
import {BlackButton} from '../style/base.js'

export default function Category(props) {
    return (
        <div>
            <BlackButton>{props.category.name}</BlackButton>
        </div>
    )
}
