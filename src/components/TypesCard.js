import React from 'react'
import {TypesGrid, TypeItem, AddButton} from '../style/dashboard.js'


export default function TypesCard(props) {
    const renderTypes = () => {
        return props.types.map( (t) => <TypeItem >{t}<AddButton>+</AddButton></TypeItem >)
    }
    return (
        <TypesGrid>
            {renderTypes()}
        </TypesGrid>
    )
}
