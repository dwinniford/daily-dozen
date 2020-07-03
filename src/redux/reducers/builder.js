import { dailyDozenData} from './dailyDozenData.js'

const initialState = {
    categories: dailyDozenData,
    recipes: [],
    ingredients: ["test", "another test"]
}

export default function builder(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
} 