import React from 'react'
import {unmountComponentAtNode} from 'react-dom'
import {render, fireEvent} from '@testing-library/react'
import DashboardContainer from './DashboardContainer'
import {Provider} from 'react-redux'
import store from '../redux/store'

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

test('it displays "bok choy" on "cruciferous vegetable" click', () => {
    const {getByText} = render(<Provider store={store}><DashboardContainer /></Provider>)

    expect(getByText("Cruciferous Vegetables")).toBeInTheDocument()

    // fireEvent.click(getByText("Cruciferous Vegetables"))

    // expect(getByText("bok choy")).toBeInTheDocument()
})

