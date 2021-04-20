import React from 'react'
import {unmountComponentAtNode} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {render, fireEvent, screen} from '@testing-library/react'
import SignupPage from './SignupPage'
import {Provider} from 'react-redux'

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
    component = render(<Provider store={store}><BrowserRouter><SignupPage /></BrowserRouter></Provider>, container)
})

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null 
    component = null
})

test('signup page displays confirm password input', () => {
    expect(component.getByPlaceholderText('confirm password')).toBeInTheDocument()
    // screen.debug()
})