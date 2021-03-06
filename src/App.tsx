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
import MealPlans from './containers/MealPlans';

import {connect} from 'react-redux'

type PropsType = {
  loggedIn: boolean,
  login: Function
}


function App(props: PropsType) {
  const userToken = () => {
    return localStorage.getItem('token')
  }
  if(userToken()) {
    // console.log(userToken())
    props.login("")
  }  

  return (
    <BrowserRouter>
      <BackgroundOverlay>
        <NavBar></NavBar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard" render={() => userToken()? <DashboardContainer /> : <Redirect to="/login" />} />
          <Route path="/login" render={() => userToken()? <Redirect to="/dashboard" /> : <LoginPage />} />
          <Route path="/signup" render={() => userToken()? <Redirect to="/dashboard" /> : <SignupPage />} />
          <Route path="/meal-plans">
            <MealPlans />
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

const mapDispatchToProps = (dispatch: Function) => {
  return {
      login: (name: string) => dispatch({type: "LOGIN", name})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
