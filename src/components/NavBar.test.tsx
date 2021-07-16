import React from 'react';
import ReactDOM, {unmountComponentAtNode} from 'react-dom'
import { render } from '@testing-library/react';
import NavBar from './NavBar'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../redux/store'

//  let container: Element | DocumentFragment | { container?: HTMLElement | undefined; baseElement?: HTMLElement | undefined; hydrate?: boolean | undefined; wrapper?: React.ComponentType<{}> | undefined; } | null | undefined = null 
// let container: Element | DocumentFragment | null = null
let container: any = null
beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
})
test('does not contain dashboard link', () => {
    // use render or ReactDOM.render? react docs use render imported from 'react-dom'
    // ReactDOM.render does not have getByText
    const {queryByText} = render(<Provider store={store}><BrowserRouter><NavBar /></BrowserRouter></Provider>, container)
    expect(queryByText('Dashboard')).not.toBeInTheDocument()
})

test('contains login link', ()=> {
    const {getByText} = render(<Provider store={store}><BrowserRouter><NavBar /></BrowserRouter></Provider>, container)
    expect(getByText("Login")).toBeInTheDocument()
})

