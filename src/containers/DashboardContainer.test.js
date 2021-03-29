import React from 'react'
import {unmountComponentAtNode} from 'react-dom'
import {render, fireEvent} from '@testing-library/react'
import DashboardContainer from './DashboardContainer'
import {Provider} from 'react-redux'
// import store from '../redux/store'

import { createStore, applyMiddleware } from "redux"
// import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {rootReducer} from "../redux/reducers/rootReducer.js"



let container = null 
let component = null
let store = null

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    store = createStore(rootReducer, applyMiddleware(thunk));
    component = render(<Provider store={store}><DashboardContainer /></Provider>, container)
})

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null 
    component = null
})

test('it displays "bok choy" on "cruciferous vegetable" click', () => {

    expect(component.queryByText("Bok choy")).not.toBeInTheDocument()
    expect(component.getByText("Cruciferous Vegetables")).toBeInTheDocument()

    fireEvent.click(component.getByText("Cruciferous Vegetables"))

    expect(component.getByText("Bok choy")).toBeInTheDocument()
})

test("add Black beans adds to search", () => {
    expect(component.getByText("Beans")).toBeInTheDocument()
    fireEvent.click(component.getByText("Beans"))
    expect(component.getByText("Black beans")).toBeInTheDocument()
    // how to click the add button within the Black beans div
    // switch to using svg first for +
    expect(component.getByText("Add Black beans to search")).toBeInTheDocument()
    fireEvent.click(component.getByText("Add Black beans to search"))
    expect(component.getByText("remove Black beans")).toBeInTheDocument()
})

test("removes Black beans from search", () => {
    fireEvent.click(component.getByText("Beans"))
    fireEvent.click(component.getByText("Add Black beans to search"))
    expect(component.getByText("remove Black beans")).toBeInTheDocument()
    fireEvent.click(component.getByText("remove Black beans"))
    expect(component.queryByText('remove Black beans')).not.toBeInTheDocument()

})

// functionality moved to recipe card tags
// test("add Black beans changes one empty circle to full circle", ()=>{
//     expect(component.queryAllByText("unchecked Beans serving").length).toEqual(3)
//     expect(component.queryAllByText("checked Beans serving").length).toEqual(0)
//     fireEvent.click(component.getByText("Beans"))
//     fireEvent.click(component.getByText("Add Black beans to search"))
//     expect(component.queryAllByText("unchecked Beans serving").length).toEqual(2)
//     expect(component.queryAllByText("checked Beans serving").length).toEqual(1)
// })

test("Add Black Eyed Peas adds to meal plan list", () => {
    expect(component.getByText("add Black Eyed Peas to Meal Plan")).toBeInTheDocument()
    expect(component.queryByText("remove Black Eyed Peas from Meal Plan")).not.toBeInTheDocument()
    fireEvent.click(component.getByText("add Black Eyed Peas to Meal Plan"))
    expect(component.queryByText("remove Black Eyed Peas from Meal Plan")).toBeInTheDocument()
})

test("Remove Black Eyed Peas removes from meal plan list", () => {
    expect(component.getByText("add Black Eyed Peas to Meal Plan")).toBeInTheDocument()
    fireEvent.click(component.getByText("add Black Eyed Peas to Meal Plan"))
    expect(component.queryByText("remove Black Eyed Peas from Meal Plan")).toBeInTheDocument()
    fireEvent.click(component.getByText("remove Black Eyed Peas from Meal Plan"))
    expect(component.queryByText("remove Black Eyed Peas from Meal Plan")).not.toBeInTheDocument()
})
