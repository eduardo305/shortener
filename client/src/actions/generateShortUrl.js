import ServiceCallHelper from '../util/ServiceCallHelper'
import { endpoints, serverURI } from '../util/Constants'

export default (originalUrl) => {
  try {
    return ServiceCallHelper(`${serverURI}${endpoints.generateUrlService}`, 'UrlShortener', { originalUrl })
  } catch(error) {
    console.log('helper: ', error)
  }
}