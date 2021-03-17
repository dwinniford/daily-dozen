const initialState = {message: "", recipes: []}

export default function mealPlan(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TO_MEAL_PLAN':
            if(!state.recipes.find((recipe) => recipe.url === action.recipe.url)) {
                return {message: `Added ${action.recipe.label} to the Meal Plan.`, recipes: [...state.recipes, action.recipe]}
            } else {
                return {...state, message: `${action.recipe.label} cannot be added to the Meal Plan twice.`}
            }
        case 'REMOVE_FROM_MEAL_PLAN':
            return {...state, recipes: state.recipes.filter((r)=> r.url !== action.url)}
        case 'ADD_TAG':
            return {...state, recipes: state.recipes.map((r) => {
                    if(action.url === r.url) {
                        let updatedTags = r.tags || []
                        updatedTags.push(action.tag)
                        return {...r, tags: updatedTags}
                    } else {
                        return r
                    }
                    
                })
            }    
        default:
            return state;
    }
}