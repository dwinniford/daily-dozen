import React from 'react';
import ReactDOM, {unmountComponentAtNode} from 'react-dom'
import { render, fireEvent, wait, screen } from '@testing-library/react';
import App from './App';

import { Provider } from 'react-redux'
import store from './redux/store'
import { MockedProvider } from '@apollo/client/testing'
import SIGN_IN from './gql/mutations/signIn'

let container: any = null 
let component: any = null

let mocks = [
  {
    request: {
      query: SIGN_IN,
      variables: {
        name: "bubba",
        password: "bubba"
      }
    },
    result: {
      data: {
        signIn: {
          token: "testtoken",
          user: {
            name: "bubba",
            id: "testid"
          }
        }
      }
    }
  }
]

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
    component = null
})

test('renders without crashing', () => {
  ReactDOM.render(<MockedProvider mocks={mocks} addTypename={false} ><Provider store={store}><App /></Provider></MockedProvider>, container)
});

it('renders home page title', () => {
  const {getByText} = render(<MockedProvider mocks={mocks} addTypename={false} ><Provider store={store}><App /></Provider></MockedProvider>, container)
  expect(getByText('Daily Dozen Home')).toBeInTheDocument();
})

// test that the dashboard link redirects to the build a recipe page.
test('it redirects to login on login link click and logs in', async () => {
  // 1. mount app
  component = render(<MockedProvider mocks={mocks} addTypename={false} ><Provider store={store}><App /></Provider></MockedProvider>, container)
  // 2. check initial text value - title
  expect(component.getByText('Daily Dozen Home')).toBeInTheDocument()
  // 3. find and click the login button
  fireEvent.click(component.getByText('Login'))

  // 4. check for a value on the login page
  expect(component.getByText('Submit')).toBeInTheDocument()
  expect(component.getByPlaceholderText('name')).toBeInTheDocument()
  
  fireEvent.change(component.getByPlaceholderText('name'), {target: {value: "bubba"}})
  fireEvent.change(component.getByPlaceholderText('password'), {target: {value: "bubba"}})
  
  
  fireEvent.click(component.getByText('Submit'))
  
  expect(component.getByText('loading')).toBeInTheDocument();
  await wait()
  // await new Promise(resolve => setTimeout( resolve, 0));
  expect(component.getByText('Meal Plan')).toBeInTheDocument()
})







