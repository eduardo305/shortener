import React, { Component } from 'react'
import { connect } from 'react-redux'
import Spinner from '../components/Spinner/Spinner'

import getOriginalUrl from '../actions/getOriginalUrl'

class UrlRedirect extends Component {
  componentDidMount = () => {
    this.props.getOriginalUrl(this.props.match.params.id)
  }
  
  componentDidUpdate() {
    const { originalUrl } = this.props

    if (originalUrl) {
      window.location.href = originalUrl
    }
  }

  render() {
    const { error } = this.props
    
    // TODO: Wrap this component in a HOC
    if (error.error) {
      return <div>{ error.error }</div>
    }

    return <Spinner type="balls" />
  }
}

const mapStateToProps = (state) => {
  const {
    shortenedUrl: { shortUrl, originalUrl },
    error
  } = state

  return {
    shortUrl,
    originalUrl,
    error
  }
}

export default connect(mapStateToProps, { getOriginalUrl })(UrlRedirect)