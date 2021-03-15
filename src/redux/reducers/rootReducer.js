import { combineReducers } from "redux";
import builder from './builder.js'
import mealPlan from './mealPlan.js'

export const rootReducer = combineReducers({builder, mealPlan })