import { combineReducers } from "redux";
import builder from './builder'
import mealPlan from './mealPlan'

export const rootReducer = combineReducers({builder, mealPlan })