import * as types from '../actions/userActions'

export const authReducer = (state = {}, action) => {
  let responseToken = action
  switch (action.type) {
    case types.GET_TOKEN:
      return { ...state, loading: true }
    case types.TOKEN_RECEIVED:
      return { ...state, responseToken, loading: false }
    case types.TOKEN_RECEIVED_FAILED:
      return { ...state, error: responseToken.error, loading: false }
    default:
      return state
  }
}

export const userLoginReducer = (state = {}, action) => {
  let response = action
  switch (action.type) {
    case types.USER_LOGIN_REQUEST:
      return { ...state, loading: true }
    case types.USER_LOGIN_SUCCESS:
      return { ...state, ...response.user, loading: false }
    case types.USER_LOGIN_FAIL:
      return { ...state, error: response?.error, loading: false }
    case types.USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const verifyUser = (state = {}, action) => {
  let responsee = action
  switch (action.type) {
    case types.VERIFY_EMAIL:
      return { ...state, responsee, loading: true }
    case types.VERIFY_EMAIL_SUCCESS:
      return { ...state, responsee, loading: false }
    case types.VERIFY_EMAIL_FAIL:
      return { ...state, error: responsee?.error, loading: false }
    case types.CONFIRM_OTP:
      return { ...state, responsee, loading: true }
    case types.CONFIRM_OTP_SUCCESS:
      return { ...state, responsee, loading: false }
    case types.OTP_CONFIRMATION_FAIL: {
      return {
        ...state,
        error: responsee.error,
        loading: false,
      }
    }
    case types.SET_PASSWORD:
      return {
        ...state,
        responsee,
        loading: true,
      }
    case types.SET_PASSWORD_SUCCESS: {
      return {
        ...state,
        responsee,
        loading: false,
      }
    }
    case types.SET_PASSWORD_FAIL:
      return {
        ...state,
        error: responsee.error,
      }
    case types.UPDATE_PASSWORD:
      return {
        ...state,
        responsee,
      }
    default:
      return state
  }
}
