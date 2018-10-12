import { SET_ERROR } from '../actions/types'

const defaultState = {
  error: ''
}

export default function error(state = defaultState, action) {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.payload }
    default:
      return state;
  }
}