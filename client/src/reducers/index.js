import { combineReducers } from 'redux'
import errorReducer from './errorReducer'
import shortenedUrl from './shortenedUrl'

export default combineReducers({
  error: errorReducer,
  shortenedUrl
})