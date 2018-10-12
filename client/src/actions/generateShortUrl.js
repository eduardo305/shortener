import ServiceCallHelper from '../util/ServiceCallHelper'
import { endpoints, serverURI } from '../util/Constants'
import { SET_SHORTENED_URL, SET_ERROR } from './types'

export default (originalUrl) => {
  return dispatch => {
    ServiceCallHelper(`${serverURI}${endpoints.generateUrlService}`, 'UrlShortener', { originalUrl }, null, (response, error) => {
      if (error) {
        dispatch({
          type: SET_ERROR,
          payload: error.message
        })

        return;
      }

      dispatch({
        type: SET_SHORTENED_URL,
        payload: {
          shortUrl: response.data.shortUrl,
          originalUrl: response.data.originalUrl
        }
      })
    })
  }
}