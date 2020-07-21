import { dailyDozenData} from './dailyDozenData.js'
import {searchResults} from './sampleSearch'

const initialState = {
    categories: dailyDozenData,
    recipes: [],
    ingredients: [],
    searchResults: searchResults,
    tagSearchResults: ["no tag results", "nothin'"]
}

export default function builder(state = initialState, action) {
    switch(action.type) {
        case "ADD_INGREDIENT":
            const categoriesAdd = state.categories.map(cat => {
                if (cat.types.includes(action.ingredient)) {
                    return {
                        ...cat, servings: {
                            ...cat.servings,
                            used: cat.servings.used + 1,
                            quantity: cat.servings.quantity - 1 
                        }
                    }
                } else {
                    return cat
                }
            })
            return {...state, categories: categoriesAdd, ingredients: [...state.ingredients, action.ingredient]};
        case "REMOVE_INGREDIENT":
            const categoriesRemove = state.categories.map(cat => {
                if (cat.types.includes(action.ingredient)) {
                    return {
                        ...cat, servings: {
                            ...cat.servings,
                            used: cat.servings.used - 1,
                            quantity: cat.servings.quantity + 1 
                        }
                    }
                } else {
                    return cat
                }
            })
            return {...state, categories: categoriesRemove, ingredients: state.ingredients.filter(i => i !== action.ingredient)}
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
            state.categories.forEach(cat => {
                let catResults = cat.types.filter( t => {
                    return t.includes(action.text)
                })
                console.log(catResults)
                tagSearchResults.push(catResults)
            })
            console.log(tagSearchResults)
            return {...state, tagSearchResults: tagSearchResults.flat()}
        default:
            return state;
    }
} 