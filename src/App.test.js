import React from 'react';
import ReactDOM, {unmountComponentAtNode} from 'react-dom'
import { render } from '@testing-library/react';
import App from './App';

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