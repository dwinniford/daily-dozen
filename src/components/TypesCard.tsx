import React from 'react'
import { connect } from 'react-redux'
import {TypesGrid, ListItem, AddButton} from '../style/dashboard.js'
import {WhitePlus} from '../style/icons.js'

type Props = {addIngredient: Function, types: any, parent: string}
function TypesCard(props: Props) {
    const handleAdd = (name: string, parent: string) => {
        console.log("add", name, "from", parent)
        props.addIngredient(name, parent)
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

const mapDispatchToProps = (dispatch: Function) => {
    return {
        addIngredient: (ingredient: string, parent: string) => dispatch({type: "ADD_INGREDIENT", ingredient, parent})
    }
}

export default connect(null, mapDispatchToProps)(TypesCard)