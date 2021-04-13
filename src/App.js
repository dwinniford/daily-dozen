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

function App(props) {
  return (
    <BrowserRouter>
      <BackgroundOverlay>
        <NavBar></NavBar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <DashboardContainer />
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

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn
  }
}

export default connect(mapStateToProps)(App);
