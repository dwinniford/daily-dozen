import React from 'react'
import {TypesGrid, ListItem, AddButton} from '../style/dashboard.js'
import {WhitePlus} from '../style/icons.js'

type Props = {addIngredient: Function, types: any}
export default function TypesCard(props: Props) {
    const handleAdd = (name: string) => {
        props.addIngredient(name)
    }
    
    const renderTypes = () => {
        return props.types.map( (t: string) => {
            return <ListItem key={t} >
                        {t}
                        <AddButton onClick={(event: object) => handleAdd(t)}><WhitePlus title={`Add ${t} to search`} /></AddButton>
                    </ListItem >
        }
        
        )
    }
    return (
        <TypesGrid>
            {renderTypes()}
        </TypesGrid>
    )
}
