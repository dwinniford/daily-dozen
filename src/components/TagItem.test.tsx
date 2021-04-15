import TagItem from './TagItem'
import React from 'react'
import {unmountComponentAtNode} from 'react-dom'
import {render, fireEvent, screen } from '@testing-library/react'

import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from 'redux-thunk'
import mealPlan from "../redux/reducers/mealPlan"
import builder from '../redux/reducers/builder'


import { Provider } from 'react-redux'
import store from '../redux/store'

let container: any = null 
let component: any = null

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    component = null
    container = null
})

describe('tag item displays tag information', () => {
    test('it renders from mock store', () => {
        const mockTag = {parent: "Beans", ingredient: "Black beans", servings: 1, recipeUrl: "http://ohsheglows.com/2009/06/23/back-eyed-peas-the-edible-kind/"}
        const mockInitialState = { mealPlan: {message: "", recipes: [], tags: [mockTag]}}
        const mockStore = createStore(combineReducers({builder, mealPlan}), mockInitialState, applyMiddleware(thunk));
        component = render(<Provider store={mockStore} ><TagItem tag={mockTag} /></Provider>, container)
        expect(component.getByText("Beans - Black beans - 1 servings")).toBeInTheDocument()
    })
})