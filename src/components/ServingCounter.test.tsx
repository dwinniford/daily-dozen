import ServingCounter from './ServingCounter'
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
    // component = render(<Provider store={store} ><ServingCounter parent={"Beans"} servingQuantity={3} /></Provider>, container)
})

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    component = null
    container = null
})

describe("serving counter displays empty check circles for no tags", () => {
    
    test('it renders with 3 unchecked circles', () => {
        component = render(<Provider store={store} ><ServingCounter parent={"Beans"} servingQuantity={3} /></Provider>, container)
        expect(component.getAllByText('unchecked Beans serving')[0]).toBeInTheDocument()
        expect(component.getAllByText('unchecked Beans serving').length).toEqual(3)
    })
    test('it shows 1 check when tag exists', () => {
        const mockTag = {parent: "Beans", ingredient: "Black beans", servings: 1, recipeUrl: "http://ohsheglows.com/2009/06/23/back-eyed-peas-the-edible-kind/"}
        const mockInitialState = {mealPlan: {message: "", recipes: [], tags: [mockTag]}}
        const mockStore = createStore(combineReducers({builder, mealPlan}), mockInitialState, applyMiddleware(thunk));
        component = render(<Provider store={mockStore} ><ServingCounter parent={"Beans"} servingQuantity={3} /></Provider>, container)
        expect(component.getAllByText('unchecked Beans serving').length).toEqual(2)
        expect(component.getByText('checked Beans serving')).toBeInTheDocument()
    })
}) 

// how to initialize the store with a tag?
// createStore accepts initial state as second argument