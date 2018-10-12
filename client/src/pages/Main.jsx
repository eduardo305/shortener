import React, { Component } from 'react'
import { connect } from 'react-redux'

import ShortenerForm from '../components/ShortenerForm/ShortenerForm'
import Result from '../components/Result/Result'

class Main extends Component {
  render() {
    const { shortUrl, originalUrl } = this.props

    return (
      <div className="main-container">
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