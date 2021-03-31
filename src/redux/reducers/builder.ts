import { dailyDozenData} from './dailyDozenData.js'
import {searchResults} from './sampleSearch'

type IngredientType = {parent: string, ingredient: string}

type InitialStateType = {
    categories: typeof dailyDozenData;
    ingredients: IngredientType[];
    searchResults: typeof searchResults;
    tagSearchResults: IngredientType[]
}

const initialState: InitialStateType = {
    categories: dailyDozenData,
    ingredients: [],
    searchResults: searchResults,
    tagSearchResults: []
}

type ActionType = 
    | {type: "ADD_INGREDIENT", parent: string, ingredient: string }
    | {type: "REMOVE_INGREDIENT", ingObj: {parent: string, ingredient: string}}
    | {type: "SEARCH_REQUEST"}
    | {type: "SEARCH_SUCCESS", searchResults: any}
    | {type: "SEARCH_ERROR", message: string}
    | {type: "SEARCH_TAGS", text: string}

export default function builder(state = initialState, action: ActionType) {
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
            let tagSearchResults: IngredientType[] = []
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
                        catResults.forEach(item => tagSearchResults.push(item))
                    }
                    
                })
            }
            return {...state, tagSearchResults: tagSearchResults.flat()}
        default:
            return state;
    }
} 