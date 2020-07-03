import React from 'react'
import {TypesGrid, TypeItem, AddButton} from '../style/dashboard.js'


export default function TypesCard(props) {
    const handleAdd = (name) => {
        props.addIngredient(name)
    }
    
    const renderTypes = () => {
        return props.types.map( (t) => <TypeItem key={t} >{t}<AddButton onClick={(event) => handleAdd(t)}>+</AddButton></TypeItem >)
    }
    return (
        <TypesGrid>
            {renderTypes()}
        </TypesGrid>
    )
}
