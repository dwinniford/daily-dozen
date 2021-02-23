import React from 'react'
import {TypesGrid, ListItem, AddButton} from '../style/dashboard.js'

type Props = {addIngredient: Function, types: any}
export default function TypesCard(props: Props) {
    const handleAdd = (name: string) => {
        props.addIngredient(name)
    }
    
    const renderTypes = () => {
        return props.types.map( (t: string) => <ListItem key={t} >{t}<AddButton onClick={(event: object) => handleAdd(t)}>+</AddButton></ListItem >)
    }
    return (
        <TypesGrid>
            {renderTypes()}
        </TypesGrid>
    )
}
