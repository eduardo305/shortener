import React, { Component } from 'react'

import ShortenerForm from '../components/ShortenerForm/ShortenerForm'
import Result from '../components/Result/Result'

class Main extends Component {
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
      <div className="main-container">
        <ShortenerForm handleResult={ this.handleResult } />
        { this.state.shortUrl && <Result shortUrl={ shortUrl } originalUrl={ originalUrl } /> }
      </div>
    )
  }
}

export default Main