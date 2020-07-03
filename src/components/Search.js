import React from 'react'
import {connect} from 'react-redux'
import {Title, BlackButton} from '../style/base.js'
import {TypesGrid, TypeItem, AddButton} from "../style/dashboard.js"


function Search(props) {
    const handleRemoveIngredient = (ingredient) => {
        props.removeIngredient(ingredient)
    }
    
    return (
        <div>
            <Title>Build a Recipe</Title>
            <TypesGrid>
            {props.ingredients.map(i => <TypeItem key={i}>{i}<AddButton onClick={(event) => handleRemoveIngredient(i)}>x</AddButton></TypeItem>)}
            </TypesGrid>
            <BlackButton>Search</BlackButton>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ingredients: state.builder.ingredients
    }
}


export default connect(mapStateToProps)(Search)