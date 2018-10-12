
import axios from 'axios'
import https from 'https'

const TIMEOUT = 5000

const getServiceResponse = (
  ServiceURL,
  ServiceName,
  RequestPayload,
  AdditionalHeaders = {},
  callback
) => {
  let method = 'get'
  if (RequestPayload) {
    method = 'post'
  }

  let requestAttributes = {}

  Object.assign(requestAttributes, {
    timeout: TIMEOUT,
    httpsAgent: new https.Agent({ keepAlive: true }),
    ...AdditionalHeaders,
    method: method,
    data: RequestPayload
  })

  return axios({ url: ServiceURL, ...requestAttributes })
    .then(response => callback(response.data))
    .catch(error => {
      error.message = `${ServiceName} - ${error.response.data.message}`
      callback(null, error)
    })
}

export default getServiceResponse