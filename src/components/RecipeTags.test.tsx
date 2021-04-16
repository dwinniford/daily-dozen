import RecipeTags from './RecipeTags'
import React from 'react'

import {unmountComponentAtNode} from 'react-dom'
import {render, fireEvent, screen } from '@testing-library/react'


import { Provider } from 'react-redux'
import {searchResults} from '../redux/reducers/sampleSearch'

import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import {rootReducer} from "../redux/reducers/rootReducer"

let container: any = null 
let component: any = null
let store = null
const mockTag = {parent: "Beans", ingredient: "Black beans", servings: 1, recipeUrl: "http://ohsheglows.com/2009/06/23/back-eyed-peas-the-edible-kind/"}
const mockInitialState = { mealPlan: {message: "", recipes: [searchResults[0].recipe], tags: [mockTag]}}

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    store = createStore(rootReducer, mockInitialState, applyMiddleware(thunk));
    component = render(<Provider store={store} ><RecipeTags recipe={searchResults[0].recipe} /></Provider>, container)
})

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    component = null
    container = null
})

test("typing p in the tag form causes dropdown of multiple search items to appear.", () => {
    expect(component.getByPlaceholderText("enter a tag")).toBeInTheDocument()
    // expect(component.getByLabelText('enter a tag')).toBeInTheDocument()
    fireEvent.keyDown(component.getByPlaceholderText('enter a tag'), {key: "p", code: "keyP"})
    fireEvent.keyUp(component.getByPlaceholderText('enter a tag'), {key: "p", code: "keyP", target: { value: 'p' }})
    expect(component.getByText("add Black-eyed peas to tags")).toBeInTheDocument()
    
})
test('it increments serving', () => {
    expect(component.getByText('increase servings')).toBeInTheDocument()
    fireEvent.click(component.getByText('increase servings'))
    expect(screen.getByText("Beans - Black beans - 2 servings")).toBeInTheDocument()
})