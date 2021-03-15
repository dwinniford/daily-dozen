const initialState = {message: "", recipes: []}

export default function mealPlan(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TO_MEAL_PLAN':
            if(!state.recipes.find((recipe) => recipe.url === action.recipe.url)) {
                return {message: `Added ${action.recipe.label} to the Meal Plan.`, recipes: [...state.recipes, action.recipe]}
            } else {
                return {...state, message: `${action.recipe.label} cannot be added to the Meal Plan twice.`}
            }
            
        default:
            return state;
    }
}