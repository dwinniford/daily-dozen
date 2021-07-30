type RecipeType = { url: string; label: string };

type TagType = {recipeUrl: string; parent: string; ingredient: string; servings: number}

type InitialStateType = {message: string; recipes: RecipeType[]; tags: TagType[]; title: string};

const initialState: InitialStateType = {message: "", recipes: [], tags: [], title: ""}

type ActionType = 
    | {type: "ADD_TO_MEAL_PLAN"; recipe: {url: string; label: string} }
    | {type: "REMOVE_FROM_MEAL_PLAN"; url: string}
    | {type: "ADD_TAG"; tag: TagType}
    | {type: "INCREMENT_TAG"; tag: TagType}
    | {type: "DECREMENT_TAG"; tag: TagType}
    | {type: "REMOVE_TAG"; tag: TagType }
    | {type: "UPDATE_TITLE"; title: string}


export default function mealPlan(state = initialState, action: ActionType) {
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
            // check if tag already exists and return state
            if(state.tags.find(t => (t.recipeUrl === action.tag.recipeUrl && t.parent === action.tag.parent && t.ingredient === action.tag.ingredient))) {
                return { ...state, message: `${action.tag.ingredient} has already bean tagged in this recipe.` }
            }
            return {...state, tags: [...state['tags'], action.tag]}    
        case 'INCREMENT_TAG':
            const newTags = state.tags.map(t => {
                if(t.recipeUrl === action.tag.recipeUrl && t.parent === action.tag.parent && t.ingredient === action.tag.ingredient) {
                    return {...t, servings: t.servings + 1 }
                } else {
                    return t
                }
            })
            return {...state, tags: newTags}
        case 'DECREMENT_TAG':
            const newDecTags = state.tags.map(t => {
                if(t.recipeUrl === action.tag.recipeUrl && t.parent === action.tag.parent && t.ingredient === action.tag.ingredient) {
                    
                    return {...t, servings: t.servings - 1 }
                } else {
                    return t
                }
            })
            return {...state, tags: newDecTags}
        case 'REMOVE_TAG':
            const newRemTagArr = state.tags.filter(t => {
                if(t.recipeUrl === action.tag.recipeUrl && t.parent === action.tag.parent && t.ingredient === action.tag.ingredient) {
                    return false
                } else {
                    return true
                }
            })
            return {...state, tags: newRemTagArr }
        case 'UPDATE_TITLE':
            return {...state, title: action.title}
        default:
            return state;
    }
}