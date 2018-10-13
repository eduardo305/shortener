const request = require('supertest')
const config = require('../config/config')
const testEndPoint = require('./helpers/requestHelpers').testEndPoint

const api = process.env.API_URL || `${config.host}:${config.port}`
const endpoint = process.env.ENDPOINT || `/api/v1/shortener`

describe('GET /api/v1/shortener', () => {
  it('Endpoint is working', () => {
    return request(api)
      .get(endpoint)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  })

  it('should list all urls', async () => {
    const results = await testEndPoint('/api/v1/shortener/', 
     { method: 'GET', json: true },
     { originalUrl: 'https://www.apple.com/shop/buy-mac/macbook-pro/15-inch' })()

    expect(results instanceof Array).toBe(true)
    expect(results[0].shortUrl).toBeDefined()
  })
})

describe('GET /api/v1/shortener/original:id', () => {
  it('should be returning with status 200', () => {
    return request(api)
      .get(`${endpoint}/original/cmwU5ijF2`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  })

  it('should return an error if no url is found', () => {
    return request(api)
      .get(`${endpoint}/original/noMatch`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(401);
  })

  it('should list one unique url object', async () => {
    const uri = `${endpoint}/original/cmwU5ijF2`
    const results = await testEndPoint(uri, 
     { method: 'GET', json: true },
     { originalUrl: 'https://www.apple.com/shop/buy-mac/macbook-pro/15-inch' })()

    expect(results instanceof Object).toBe(true)
    expect(results.success).toBe(true)
    expect(results.data).toBeDefined()
    expect(results.data.shortUrl).toBe('cmwU5ijF2')
    expect(results).toMatchSnapshot(`GET ${uri}`)
  })
})

describe('POST /api/v1/shortener', () => {
  it('should save a new short url', () => {
    return request(api)
      .post(`${endpoint}`)
      .send({ originalUrl: 'http://www.apple.com' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  })

  it('should not shorten urls already shortened', async () => {
    const uri = `${endpoint}`
    const results = await testEndPoint(uri, 
      { method: 'POST', json: true },
      { originalUrl: 'http://www.apple.com' })()

    expect(results instanceof Object).toBe(true)
    expect(results.success).toBe(true)
    expect(results.data).toBeDefined()
    expect(results.data.shortUrl).toBe('cmwU5ijF2')
    expect(results).toMatchSnapshot(`POST ${uri}`)
  })

  it('should return an error if user attempts to shortening a system url', () => {
    return request(api)
      .post(`${endpoint}`)
      .send({ originalUrl: 'http://127.0.0.1:3000/not-found' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(401);
  })
})