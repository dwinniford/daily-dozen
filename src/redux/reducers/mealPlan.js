const initialState = []

export default function mealPlan(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TO_MEAL_PLAN':
            if(!state.find((recipe) => recipe.url === action.recipe.url)) {
                return [...state, action.recipe]
            } else {
                return state
            }
            
        default:
            return state;
    }
}