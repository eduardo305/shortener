import React, { Component } from 'react'
import getOriginalUrl from '../actions/getOriginalUrl'

class UrlRedirect extends Component {
  componentDidMount = async () => {
    const urlId = this.props.match.params.id

    const result = await getOriginalUrl(urlId)

    if (result) {
      window.location.href = result.data.originalUrl
    }
  }

  render() {
    return (
      <div>UrlRedirect</div>
    )
  }
}

export default UrlRedirect