import React from 'react'
import {unmountComponentAtNode} from 'react-dom'
import {render, fireEvent, screen} from '@testing-library/react'
import UserForm from './UserForm'
import {Provider} from 'react-redux'
// import store from '../redux/store'

import { createStore, applyMiddleware } from "redux"
// import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {rootReducer} from "../redux/reducers/rootReducer"



let container: any = null 
let component: any = null
let store = null

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    store = createStore(rootReducer, applyMiddleware(thunk));
    component = render(<Provider store={store}><UserForm /></Provider>, container)
})

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null 
    component = null
})

test('it validates name and password length', () => {
    
    fireEvent.click(component.getByText("Submit"))
    expect(component.getByText('Name must have at least 2 characters.')).toBeInTheDocument()
    fireEvent.change(component.getByPlaceholderText('name'), {target: {value: "bubba"}})
    fireEvent.click(component.getByText("Submit"))
    expect(component.getByText('Password must have at least 5 characters.')).toBeInTheDocument()
    // fireEvent.change(component.getByPlaceholderText('password'), {target: {value: "bubba"}})
    // fireEvent.click(component.getByText("Submit"))
    // screen.debug()
})