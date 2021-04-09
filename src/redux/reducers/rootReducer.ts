import { combineReducers } from "redux";
import builder from './builder'
import mealPlan from './mealPlan'
import user from './user'
export const rootReducer = combineReducers({builder, mealPlan, user })