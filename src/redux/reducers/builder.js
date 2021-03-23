import { dailyDozenData} from './dailyDozenData.js'
import {searchResults} from './sampleSearch'

const initialState = {
    categories: dailyDozenData,
    recipes: [],
    ingredients: [],
    searchResults: searchResults,
    tagSearchResults: []
}

export default function builder(state = initialState, action) {
    switch(action.type) {
        case "ADD_INGREDIENT":
            if(state.ingredients.find((ing) => ing.parent === action.parent && ing.ingredient === action.ingredient)) {
                return state
            }
            return {...state, ingredients: [...state.ingredients, {ingredient: action.ingredient, parent: action.parent}]};
        case "REMOVE_INGREDIENT":
            return {...state, ingredients: state.ingredients.filter(({ingredient, parent}) => parent !== action.ingObj.parent || ingredient !== action.ingObj.ingredient)}
        case "SEARCH_REQUEST":
            return state;
        case "SEARCH_SUCCESS":
            // console.log(action.searchResults)
            return {...state, searchResults: action.searchResults}
        case "SEARCH_ERROR":
            console.log(action.message)
            return state;
        case "SEARCH_TAGS":
            let tagSearchResults = []
            if(action.text.length === 0) {
                tagSearchResults = []
            } else {
                state.categories.forEach(cat => {
                    let catResults = cat.types.filter( t => {
                        return t.includes(action.text)
                    }).map((i) => { 
                        return {parent: cat.name, ingredient: i}
                    })
                    if(catResults.length > 0) {
                        tagSearchResults.push(catResults)
                    }
                    
                })
            }
            return {...state, tagSearchResults: tagSearchResults.flat()}
        default:
            return state;
    }
} 