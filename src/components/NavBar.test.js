import React from 'react';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';
import NavBar from './NavBar'
import {BrowserRouter} from 'react-router-dom'

test('contains dashboard link', () => {
    const {getByText} = render(<BrowserRouter><NavBar /></BrowserRouter>)
    expect(getByText('Dashboard')).toBeInTheDocument()
})

