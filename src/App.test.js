import React from 'react';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
});

it('renders home page title', () => {
  const {getByText} = render(<App />)
  expect(getByText('Daily Dozen Home')).toBeInTheDocument();
})