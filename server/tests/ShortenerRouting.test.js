const requestPromise = require('request-promise')
const config = require('../config/config')

const api = process.env.API_URL || `${config.host}:${config.port}`

const testEndpointSnapshot = (requestOptions, options = {}) => {
  return () => {
    return (
      requestPromise(requestOptions).then(result =>
        // expect the result to match a snapshot named after the uri
        expect(result).toMatchSnapshot(`${requestOptions.method} ${requestOptions.uri}`)
      )
    )
  }
}

const testEndPoint = (endpoint, config, body = {}) => {
  return (
    testEndpointSnapshot({
      method: config.method,
      uri: `${api}${endpoint}`,
      json: config.json,
      body
    })
  )
}

describe('GET /api/v1/shortener', () => {
  it('should list all urls', testEndPoint('/api/v1/shortener',
    { method: 'GET', json: true }
  ))
})

describe('GET /api/v1/shortener:id', () => {
  it('should list one unique url', testEndPoint('/api/v1/shortener/5bbd4982fb6fc05175c5a812',
    { method: 'GET', json: true }
  ))
})

describe('POST /api/v1/shortener', () => {
  it('should save a new short url', testEndPoint('/api/v1/shortener/', 
    { method: 'GET', json: true },
    { originalUrl: 'https://www.apple.com/shop/buy-mac/macbook-pro/15-inch' }
  ))
})