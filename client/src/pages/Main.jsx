import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../components/Header/Header'
import ShortenerForm from '../components/ShortenerForm/ShortenerForm'
import Result from '../components/Result/Result'

class Main extends Component {
  render() {
    const { shortUrl, originalUrl } = this.props

    return (
      <div className="main-container">
        <Header />
        <ShortenerForm />
        { shortUrl && <Result shortUrl={ shortUrl } originalUrl={ originalUrl } /> }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { shortenedUrl: { shortUrl, originalUrl } } = state

  return {
    shortUrl,
    originalUrl
  }
}

export default connect(mapStateToProps)(Main)