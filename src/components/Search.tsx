import React from 'react'
import {connect} from 'react-redux'
import {search} from '../redux/actions/search'
import {Title, BlackButton} from '../style/base.js'
import {TypesGrid, ListItem, AddButton, SearchResultsGrid, DashboardBlock} from "../style/dashboard.js"
import {WhiteX} from '../style/icons'
import RecipeCard from './RecipeCard.js'


function Search(props: {removeIngredient: Function, search: Function, ingredients: string[], searchResults: {recipe: {label: string, source: string}}[]}) {
    const handleRemoveIngredient = (ingredient: string) => {
        props.removeIngredient(ingredient)
    }
    const handleSearch = (event: {}) => {
        props.search(props.ingredients)
    }
    
    return (
        <DashboardBlock>
            <Title>Find a Recipe</Title>
                <TypesGrid>
                    {props.ingredients.map(i => <ListItem key={i}>{i}<AddButton onClick={(event: {}) => handleRemoveIngredient(i)}><WhiteX title={`remove ${i}`} /></AddButton></ListItem>)}
                </TypesGrid>
            <BlackButton onClick={handleSearch}>Search</BlackButton>
            <SearchResultsGrid>
                {props.searchResults.map(r => <RecipeCard key={r.recipe.label+"-"+r.recipe.source} recipe={r.recipe} />)}
            </SearchResultsGrid>
        </DashboardBlock>
    )
}

const mapStateToProps = (state: {builder: {ingredients: string[], searchResults: {recipe: {label: string, source: string}}[]} }) => {
    return {
        ingredients: state.builder.ingredients,
        searchResults: state.builder.searchResults
    }
}
const mapDispatchToProps = (dispatch: Function) => {
    return {
        search: (ingredients: string[]) => dispatch(search(ingredients)),
        removeIngredient: (ingredient: string) => dispatch({type: "REMOVE_INGREDIENT", ingredient})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Search)