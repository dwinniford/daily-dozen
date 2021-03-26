const initialState = {message: "", recipes: [], tags: []}

export default function mealPlan(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TO_MEAL_PLAN':
            if(!state.recipes.find((recipe) => recipe.url === action.recipe.url)) {
                return {...state, message: `Added ${action.recipe.label} to the Meal Plan.`, recipes: [...state.recipes, action.recipe]}
            } else {
                return {...state, message: `${action.recipe.label} cannot be added to the Meal Plan twice.`}
            }
        case 'REMOVE_FROM_MEAL_PLAN':
            return {...state, recipes: state.recipes.filter((r)=> r.url !== action.url)}
        case 'ADD_TAG':
            return {...state, tags: [...state['tags'], action.tag]}    
        case 'INCREMENT_TAG':
            const newTags = state.tags.map(t => {
                if(t.recipeUrl === action.tag.recipeUrl && t.parent === action.tag.parent && t.ingredient === action.tag.ingredient) {
                    console.log("about to increment")
                    return {...t, servings: t.servings + 1 }
                } else {
                    return t
                }
            })
            return {...state, tags: newTags}
        default:
            return state;
    }
}