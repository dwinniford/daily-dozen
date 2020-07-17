import React from 'react'
import {TypesGrid, ListItem, AddButton} from '../style/dashboard.js'


export default function TypesCard(props) {
    const handleAdd = (name) => {
        props.addIngredient(name)
    }
    
    const renderTypes = () => {
        return props.types.map( (t) => <ListItem key={t} >{t}<AddButton onClick={(event) => handleAdd(t)}>+</AddButton></ListItem >)
    }
    return (
        <TypesGrid>
            {renderTypes()}
        </TypesGrid>
    )
}
