import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import './App.css';
import Home  from './components/Home.js'
import About from './components/About.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
