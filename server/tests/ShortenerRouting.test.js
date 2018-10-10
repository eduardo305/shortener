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

const testGetEndpoint = (endpoint, options = {}) => {
  return (
    testEndpointSnapshot({
      method: 'GET',
      uri: `${api}${endpoint}`
    }, options )
  )
}

describe('/api/v1/shortener', () => {
  it('should list all urls', testGetEndpoint('/api/v1/shortener'))
})

describe('/api/v1/shortener:id', () => {
  it('should list one unique url', testGetEndpoint('/api/v1/shortener/5bbd4982fb6fc05175c5a812'))
})