import * as types from './userActions'

export const getTokerAction = (token) => {
  return {
    type: types.GET_TOKEN,
    token,
    loading: true,
  }
}
export const tokenReceived = (tokenRec) => {
  return {
    type: types.TOKEN_RECEIVED,
    tokenRec,
  }
}
export const tokenRecFailed = (error) => {
  return {
    type: types.TOKEN_RECEIVED_FAILED,
    error,
  }
}

export const loginUserAction = (user) => {
  return {
    type: types.USER_LOGIN_REQUEST,
    user,
    loading: true,
  }
}
export const loginSuccess = (user) => {
  return {
    type: types.USER_LOGIN_SUCCESS,
    user,
    loading: false,
  }
}
export const loginFailed = (error) => {
  return {
    type: types.USER_LOGIN_FAIL,
    error,
    loading: false,
  }
}

export const logout = () => {
  localStorage.removeItem('userInfo')
  return {
    type: types.USER_LOGOUT,
  }
}
export const verifyEmail = (email) => {
  return {
    type: types.VERIFY_EMAIL,
    email,
    loading: true,
  }
}
export const verifyEmailSuccess = (email) => {
  return {
    type: types.VERIFY_EMAIL_SUCCESS,
    email,
    loading: false,
  }
}
export const verifyEmailFailed = (error) => {
  return {
    type: types.VERIFY_EMAIL_FAIL,
    error,
    loading: false,
  }
}
export const verifyOTP = (otp) => {
  return {
    type: types.CONFIRM_OTP,
    otp,
    loading: true,
  }
}
export const verifyOTPSuccess = (otp) => {
  return {
    type: types.CONFIRM_OTP_SUCCESS,
    otp,
    loading: false,
  }
}
export const verifyOtpFailed = (error) => {
  return {
    type: types.OTP_CONFIRMATION_FAIL,
    error,
  }
}
export const setPass = (password) => {
  return {
    type: types.SET_PASSWORD,
    password,
    loading: true,
  }
}
export const setPassSuccess = (password) => {
  return {
    type: types.SET_PASSWORD_SUCCESS,
    password,
    loading: false,
  }
}
export const setPasswordFailed = (error) => {
  return {
    type: types.SET_PASSWORD_FAIL,
    error,
  }
}
export const updatePassword = (password) => {
  return {
    type: types.UPDATE_PASSWORD,
    password,
  }
}
