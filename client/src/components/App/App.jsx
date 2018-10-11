import React, { Component } from 'react'
import './App.scss'

import ShortenerForm from '../ShortenerForm/ShortenerForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShortenerForm />
      </div>
    )
  }
}

export default App
