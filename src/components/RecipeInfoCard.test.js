import RecipeInfoCard from './RecipeInfoCard.js'
import React from 'react'

import {unmountComponentAtNode} from 'react-dom'
import {render, fireEvent, screen } from '@testing-library/react'


import { Provider } from 'react-redux'
import store from '../redux/store'
import {searchResults} from '../redux/reducers/sampleSearch'

let container = null 
let component = null

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    component = render(<RecipeInfoCard expand={true} recipe={searchResults[0].recipe} />, container)
})

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    component = null
    container = null
})

test("it displays an image from the recipe", ()=> {
    expect(component.getByRole('img')).toBeInTheDocument()
})
