import { dailyDozenData} from './dailyDozenData.js'

const initialState = {
    categories: dailyDozenData,
    recipes: [],
    ingredients: ["test", "another test"],
    searchResults: []
}

export default function builder(state = initialState, action) {
    switch(action.type) {
        case "ADD_INGREDIENT":
            return {...state, ingredients: [...state.ingredients, action.ingredient]};
        default:
            return state;
    }
} 