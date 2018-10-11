import React, { Component } from 'react'
import './App.scss'

import ShortenerForm from '../ShortenerForm/ShortenerForm'
import Result from '../Result/Result'

class App extends Component {
  state = {
    shortUrl: '',
    originalUrl: ''
  }

  handleResult = (result) => {
    if (result) {
      this.setState({
        shortUrl: result.shortUrl,
        originalUrl: result.originalUrl
      })
    }
  }

  render() {
    const { shortUrl, originalUrl } = this.state
    
    return (
      <div className="App">
        <ShortenerForm handleResult={ this.handleResult } />
        { this.state.shortUrl && <Result shortUrl={ shortUrl } originalUrl={ originalUrl } /> }
      </div>
    )
  }
}

export default App
