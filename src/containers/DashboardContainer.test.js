import React from 'react'
import {unmountComponentAtNode} from 'react-dom'
import {render, fireEvent} from '@testing-library/react'
import DashboardContainer from './DashboardContainer'
import {Provider} from 'react-redux'
import store from '../redux/store'

let container = null 
let component = null

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    component = render(<Provider store={store}><DashboardContainer /></Provider>)
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

