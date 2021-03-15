const initialState = []

export default function mealPlan(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TO_MEAL_PLAN':
            return [...state, action.recipe]
        default:
            return state;
    }
}