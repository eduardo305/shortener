import React from 'react'
import fullURL from '../../util/fullUrl'

const Result = ({ originalUrl, shortUrl }) => {
  return (
    <div className="result-container">
      <div className="original-url">{ originalUrl }</div>
      <div className="short-url">{ fullURL(shortUrl) }</div>
    </div>
  )
}

export default Result