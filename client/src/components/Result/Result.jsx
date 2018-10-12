import React from 'react'
import fullURL from '../../util/fullUrl'

import './Result.scss'

const Result = ({ originalUrl, shortUrl }) => {
  return (
    <div className="result-container">
      <div className="original-url">
        <strong>Original URL:</strong> { originalUrl }
      </div>
      <div className="short-url">
        <strong>Short URL:</strong> { fullURL(shortUrl) }
      </div>
    </div>
  )
}

export default Result