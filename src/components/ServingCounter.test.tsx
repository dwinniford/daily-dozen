import ServingCounter from './ServingCounter'
import React from 'react'
import {unmountComponentAtNode} from 'react-dom'
import {render, fireEvent, screen } from '@testing-library/react'


import { Provider } from 'react-redux'
import store from '../redux/store'

let container: any = null 
let component: any = null

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    component = render(<Provider store={store} ><ServingCounter parent={"Beans"} servingQuantity={3} /></Provider>, container)
})

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    component = null
    container = null
})

describe("serving counter displays empty check circles for no tags", () => {
    test('it renders with 3 unchecked circles', () => {
        expect(component.getAllByText('unchecked Beans serving')[0]).toBeInTheDocument()
        expect(component.getAllByText('unchecked Beans serving').length).toEqual(3)
    })
}) 