import Search from './Search'
import React from 'react'
import {render} from '@testing-library/react'
import App from '../App';

import { Provider } from 'react-redux'
import store from '../redux/store'

describe('Recipe card expands and collapses', () => {
  
    test('it displays a list of recipes', () => {
   
        const {getByText} = render(<Provider store={store} ><Search /></Provider> )
    
        expect(getByText('Find a Recipe')).toBeInTheDocument()
        expect(getByText('Black Eyed Peas')).toBeInTheDocument()
        
        
    })
    
    // test('recipe card detail info is not visible', ()=> {
    //     expect(getByText("Ingredients")).toBeInTheDocument()
    // })
    
})