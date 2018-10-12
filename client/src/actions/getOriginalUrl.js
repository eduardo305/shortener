import ServiceCallHelper from '../util/ServiceCallHelper'
import { endpoints, serverURI } from '../util/Constants'

export default (shortUrl) => {
  try {
    return ServiceCallHelper(`${serverURI}${endpoints.getOriginalUrlService}/${shortUrl}`, 'GetOriginalUrl')
  } catch(error) {
    console.log('helper: ', error)
  }
}