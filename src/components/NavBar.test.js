import React from 'react';
import ReactDOM, {unmountComponentAtNode} from 'react-dom'
import { render } from '@testing-library/react';
import NavBar from './NavBar'
import {BrowserRouter} from 'react-router-dom'

let container = null 

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
})
test('contains dashboard link', () => {
    // use render or ReactDOM.render? react docs use render imported from 'react-dom'
    // ReactDOM.render does not have getByText
    const {getByText} = render(<BrowserRouter><NavBar /></BrowserRouter>, container)
    expect(getByText('Dashboard')).toBeInTheDocument()
})

