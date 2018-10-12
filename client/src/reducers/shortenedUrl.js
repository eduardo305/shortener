import {
  SET_SHORTENED_URL,
  RESET_RESULTS
} from '../actions/types'

const defaultState = {
  shortUrl: '',
  originalUrl: ''
}

export default function error(state = defaultState, action) {
  switch (action.type) {
    case SET_SHORTENED_URL:
      return { ...state, ...action.payload }
    case RESET_RESULTS:
      return { ...state, ...defaultState }
    default:
      return state;
  }
}