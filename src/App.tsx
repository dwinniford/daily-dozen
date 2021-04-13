import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import './App.css';
import Home  from './components/Home'
import About from './components/About'
import LoginPage from './containers/LoginPage'
import SignupPage from './containers/SignupPage'
import {BackgroundOverlay} from './style/base.js'
import NavBar from './components/NavBar'
import DashboardContainer from './containers/DashboardContainer'

import {connect} from 'react-redux'

type PropsType = {
  loggedIn: boolean
}

function App(props: PropsType) {
  return (
    <BrowserRouter>
      <BackgroundOverlay>
        <NavBar></NavBar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            {props.loggedIn? <DashboardContainer /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            {props.loggedIn? <Redirect to="/dashboard" /> : <LoginPage /> }
          </Route>
          <Route path="/signup">
            { props.loggedIn? <Redirect to="/dashboard" /> : <SignupPage /> }
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </BackgroundOverlay>
    </BrowserRouter>
  );
}

type StateType = {
  user: {loggedIn: boolean}
}

const mapStateToProps = (state: StateType) => {
  return {
    loggedIn: state.user.loggedIn
  }
}

export default connect(mapStateToProps)(App);