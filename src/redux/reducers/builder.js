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
        default:
            return state;
    }
} 