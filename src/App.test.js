import React from 'react';
import ReactDOM, {unmountComponentAtNode} from 'react-dom'
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

import { Provider } from 'react-redux'
import store from './redux/store'

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

test('renders without crashing', () => {
  ReactDOM.render(<App />, container)
});

it('renders home page title', () => {
  const {getByText} = render(<App />, container)
  expect(getByText('Daily Dozen Home')).toBeInTheDocument();
})

// test that the dashboard link redirects to the build a recipe page.
test('it redirects to dashboard on dashboard link click', () => {
  // 1. mount app
  const {getByText} = render(<Provider store={store}><App /></Provider>, container)
  // 2. check initial text value - title
  expect(getByText('Daily Dozen Home')).toBeInTheDocument()
  // 3. find and click the dashboard button
  fireEvent.click(getByText('Dashboard'))
  // 4. check for the new title value
  expect(getByText('Find a Recipe')).toBeInTheDocument()

})





