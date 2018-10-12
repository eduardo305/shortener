import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from '../../pages/Main'
import NotFound from '../../pages/NotFound'
import UrlRedirect from '../../pages/UrlRedirect'

import './App.scss'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/not-found" component={NotFound} />
            <Route exact path="/:id" component={UrlRedirect} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
