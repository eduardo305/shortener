import { SET_ERROR } from './types'

export const resetError = () => {
  return {
    type: SET_ERROR,
    payload: ''
  }
}