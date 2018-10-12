import { SET_SHORTENED_URL } from '../actions/types'

const defaultState = {
  shortUrl: '',
  originalUrl: ''
}

export default function error(state = defaultState, action) {
  switch (action.type) {
    case SET_SHORTENED_URL:
      return { ...state, ...action.payload }
    default:
      return state;
  }
}