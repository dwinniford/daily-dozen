import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import './App.css';
import Home  from './components/Home.js'
import About from './components/About.js'
import {BackgroundOverlay} from './style/base.js'

function App() {
  return (
    <BrowserRouter>
      <BackgroundOverlay>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BackgroundOverlay>
    </BrowserRouter>
  );
}

export default App;
