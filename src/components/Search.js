import React from 'react'
import {connect} from 'react-redux'
import {search} from '../redux/actions/search'
import {Title, BlackButton} from '../style/base.js'
import {TypesGrid, ListItem, AddButton, SearchResultsGrid, DashboardBlock} from "../style/dashboard.js"
import RecipeCard from './RecipeCard.js'

function Search(props) {
    const handleRemoveIngredient = (ingredient) => {
        props.removeIngredient(ingredient)
    }
    const handleSearch = (event) => {
        props.search(props.ingredients)
    }
    
    return (
        <DashboardBlock>
            <Title>Find a Recipe</Title>
                <TypesGrid>
                    {props.ingredients.map(i => <ListItem key={i}>{i}<AddButton onClick={(event) => handleRemoveIngredient(i)}>x</AddButton></ListItem>)}
                </TypesGrid>
            <BlackButton onClick={handleSearch}>Search</BlackButton>
            <SearchResultsGrid>
                {props.searchResults.map(r => <RecipeCard key={r.recipe.label+"-"+r.recipe.source} recipe={r.recipe} />)}
            </SearchResultsGrid>
        </DashboardBlock>
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
        search: (ingredients) => dispatch(search(ingredients))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Search)