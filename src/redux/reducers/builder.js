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
            const categoriesAdd = state.categories.map(cat => {
                if (cat.name === action.parent) {
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
            return {...state, categories: categoriesAdd, ingredients: [...state.ingredients, {ingredient: action.ingredient, parent: action.parent}]};
        case "REMOVE_INGREDIENT":
            const categoriesRemove = state.categories.map(cat => {
                if (cat.name === action.ingObj.parent) {
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
            // if matches parent, check if also matches ingredient
            return {...state, categories: categoriesRemove, ingredients: state.ingredients.filter(({ingredient, parent}) => parent !== action.ingObj.parent || ingredient !== action.ingObj.ingredient)}
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