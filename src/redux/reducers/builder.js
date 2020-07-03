import { dailyDozenData} from './dailyDozenData.js'

const initialState = {
    categories: dailyDozenData,
    recipes: []
}

export default function builder(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
} 