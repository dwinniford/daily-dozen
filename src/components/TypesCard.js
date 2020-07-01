import React from 'react'
import {TypesGrid, TypeItem} from '../style/dashboard.js'

export default function TypesCard(props) {
    const renderTypes = () => {
        return props.types.map( (t) => <TypeItem >{t}<button>Add</button></TypeItem >)
    }
    return (
        <TypesGrid>
            {renderTypes()}
        </TypesGrid>
    )
}
