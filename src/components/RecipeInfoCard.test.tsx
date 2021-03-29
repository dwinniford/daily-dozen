import RecipeInfoCard from './RecipeInfoCard'
import React from 'react'

import {unmountComponentAtNode} from 'react-dom'
import {render, fireEvent, screen, waitForElement } from '@testing-library/react'


import { Provider } from 'react-redux'
import store from '../redux/store'
import {searchResults} from '../redux/reducers/sampleSearch'

let container = null 
let component = null

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    component = render(<Provider store={store} ><RecipeInfoCard expand={true} recipe={searchResults[0].recipe} inMealPlan={true} /></Provider>, container)
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

test("Tags button toggles tag input form", ()=> {
    expect(component.getByText("Tags")).toBeInTheDocument()
    expect(component.queryByPlaceholderText('enter a tag')).not.toBeInTheDocument()
    fireEvent.click(component.getByText("Tags"))
    expect(component.getByPlaceholderText('enter a tag')).toBeInTheDocument()
})
