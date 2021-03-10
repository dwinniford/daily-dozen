import React from 'react'
import {TypesGrid, ListItem, AddButton} from '../style/dashboard.js'
import {WhitePlus} from '../style/icons.js'

type Props = {addIngredient: Function, types: any, parent: string}
export default function TypesCard(props: Props) {
    const handleAdd = (name: string, parent: string) => {
        console.log("add", name, "from", parent)
        props.addIngredient(name)
    }
    
    const renderTypes = () => {
        return props.types.map( (t: string) => {
            return <ListItem key={t} >
                        {t}
                        <AddButton onClick={(event: object) => handleAdd(t, props.parent)}><WhitePlus title={`Add ${t} to search`} /></AddButton>
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
