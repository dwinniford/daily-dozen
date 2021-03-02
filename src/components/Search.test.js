import Search from './Search'
import React from 'react'
import {unmountComponentAtNode} from 'react-dom'
import {render} from '@testing-library/react'


import { Provider } from 'react-redux'
import store from '../redux/store'

let container = null 
let component = null
let getByText = null

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    component = render(<Provider store={store} ><Search /></Provider>, container)
    getByText = component.getByText
    // console.log(getByText)
})

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    component = null
    getByText = null 
    container = null
})

describe('Recipe card expands and collapses', () => {
  
    test('it displays a list of recipes', () => {
   
        
    
        expect(getByText('Find a Recipe')).toBeInTheDocument()
        expect(getByText('Black Eyed Peas')).toBeInTheDocument()
        
        
    })
    
    test('recipe card detail info is not visible before expand', ()=> {
        // how to test 
        expect(component.queryAllByText("Ingredients")[0]).not.toBeVisible()
    })
    
})