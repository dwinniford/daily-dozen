import { dailyDozenData} from './dailyDozenData.js'

const initialState = {
    categories: dailyDozenData,
    recipes: [],
    ingredients: [],
    searchResults: []
}

export default function builder(state = initialState, action) {
    switch(action.type) {
        case "ADD_INGREDIENT":
            return {...state, ingredients: [...state.ingredients, action.ingredient]};
        case "REMOVE_INGREDIENT":
            return {...state, ingredients: state.ingredients.filter(i => i !== action.ingredient)}
        default:
            return state;
    }
} 