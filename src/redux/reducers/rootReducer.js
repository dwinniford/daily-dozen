import { combineReducers } from "redux";
import builder from './builder.js'
import usersPlans from './usersPlans.js'

export const rootReducer = combineReducers({builder, usersPlans })