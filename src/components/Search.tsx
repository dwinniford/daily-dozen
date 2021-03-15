import React from 'react'
import {connect} from 'react-redux'
import {search} from '../redux/actions/search'
import {Title, BlackButton} from '../style/base.js'
import {TypesGrid, ListItem, AddButton, SearchResultsGrid, DashboardBlock} from "../style/dashboard.js"
import {WhiteX} from '../style/icons'
import RecipeCard from './RecipeCard'

type RecipeProps = {label: string, source: string, ingredientLines: string[], tags: { parent: string; ingredient: string; }[], url: string, image: string;}
type SearchProps = {removeIngredient: Function, search: Function, ingredients: {parent: string, ingredient: string}[], searchResults: {recipe: RecipeProps}[]}
function Search(props: SearchProps) {
    const handleRemoveIngredient = (ingObj: {parent: string, ingredient: string}) => {
        props.removeIngredient(ingObj)
    }
    const handleSearch = (event: {}) => {
        props.search(props.ingredients)
    }
    
    return (
        <DashboardBlock>
            <Title>Find a Recipe</Title>
                <TypesGrid>
                    {props.ingredients.map(i => <ListItem key={i.parent + "-" + i.ingredient }>
                        {i.ingredient}
                        <AddButton onClick={(event: {}) => handleRemoveIngredient(i)}><WhiteX title={`remove ${i.ingredient}`} /></AddButton>
                        </ListItem>)}
                </TypesGrid>
            <BlackButton onClick={handleSearch}>Search</BlackButton>
            <SearchResultsGrid>
                {props.searchResults.map(r => <RecipeCard key={r.recipe.label+"-"+r.recipe.source} recipe={r.recipe} />)}
            </SearchResultsGrid>
        </DashboardBlock>
    )
}

const mapStateToProps = (state: {builder: {ingredients: {parent: string, ingredient: string}[], searchResults: {recipe: RecipeProps}[]} }) => {
    return {
        ingredients: state.builder.ingredients,
        searchResults: state.builder.searchResults
    }
}
const mapDispatchToProps = (dispatch: Function) => {
    return {
        search: (ingredients: string[]) => dispatch(search(ingredients)),
        removeIngredient: (ingObj: {ingredient: string, parent: string}) => dispatch({type: "REMOVE_INGREDIENT", ingObj})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Search)