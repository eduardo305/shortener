import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from '../../pages/Main/Main'
import NotFound from '../../pages/NotFound'
import UrlRedirect from '../../pages/UrlRedirect/UrlRedirect'

import './App.scss'

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Fragment>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/not-found" component={NotFound} />
              <Route exact path="/:id" component={UrlRedirect} />
              <Route component={NotFound} />
            </Switch>
          </Fragment>
        </div>
      </Router>
    )
  }
}

export default App
