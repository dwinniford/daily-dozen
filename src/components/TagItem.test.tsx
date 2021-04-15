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

    test('it increments serving', () => {
        const mockTag = {parent: "Beans", ingredient: "Black beans", servings: 1, recipeUrl: "http://ohsheglows.com/2009/06/23/back-eyed-peas-the-edible-kind/"}
        const mockInitialState = { mealPlan: {message: "", recipes: [], tags: [mockTag]}}
        const mockStore = createStore(combineReducers({builder, mealPlan}), mockInitialState, applyMiddleware(thunk));
        // console.log(mockStore)
        // how to have the tag prop be updated from redux?
        // currently its passed in a static object so it won't be rerendered when the state updates???
        // need to move the test to the parent element?
        // create a subscribe listener that will be notified when the tag changes
        // should move this test to parent component
        
        function select(state) {
            return state.mealPlan.tags[0].servings
        }
          
        let currentValue = select(mockStore.getState())
        
        function handleChange() {
            let previousValue = currentValue
            currentValue = select(mockStore.getState())
            
            if (previousValue !== currentValue) {
                // console.log(
                // 'servings changed from',
                // previousValue,
                // 'to',
                // currentValue
                // )
                component.rerender(<Provider store={mockStore} ><TagItem tag={mockStore.getState().mealPlan.tags[0]} /></Provider>, container)
            }
        }
          
        const unsubscribe = mockStore.subscribe(handleChange)

        component = render(<Provider store={mockStore} ><TagItem tag={mockStore.getState().mealPlan.tags[0]} /></Provider>, container)

        expect(component.getByText('increase servings')).toBeInTheDocument()
        fireEvent.click(component.getByText('increase servings'))
        // screen.debug()
        expect(screen.getByText("Beans - Black beans - 2 servings")).toBeInTheDocument()

        

    })
})