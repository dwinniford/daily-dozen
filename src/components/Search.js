import React from 'react'
import {connect} from 'react-redux'
import {Title, BlackButton} from '../style/base.js'
import {TypesGrid, TypeItem, AddButton, SearchResultsGrid} from "../style/dashboard.js"


function Search(props) {
    const handleRemoveIngredient = (ingredient) => {
        props.removeIngredient(ingredient)
    }
    const handleSearch = (event) => {
        props.search(props.ingredients)
    }
    
    return (
        <div>
            <Title>Build a Recipe</Title>
                <TypesGrid>
                    {props.ingredients.map(i => <TypeItem key={i}>{i}<AddButton onClick={(event) => handleRemoveIngredient(i)}>x</AddButton></TypeItem>)}
                </TypesGrid>
            <BlackButton onClick={handleSearch}>Search</BlackButton>
            <SearchResultsGrid>
                {props.searchResults.map(r => <BlackButton>{r}</BlackButton>)}
            </SearchResultsGrid>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ingredients: state.builder.ingredients,
        searchResults: state.builder.searchResults
    }
}
const mapDispatchToProps = dispatch => {
    return {
        search: (ingredients) => dispatch({type: "SEARCH", ingredients})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Search)