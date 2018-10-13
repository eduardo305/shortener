import React from 'react'
import fullURL from '../../util/fullUrl'

import './Result.scss'

const Result = ({ originalUrl, shortUrl }) => {
  const urlShortened = fullURL(shortUrl)

  return (
    <div className="result-container">
      <div className="url original-url">
        <strong>Original URL:</strong> { originalUrl }
      </div>
      <div className="url short-url">
        <strong>Short URL: </strong>
        <a
          href={ urlShortened }
          target="_blank"
          rel="noopener noreferrer"
        >
          { urlShortened }
        </a>
      </div>
    </div>
  )
}

export default Result