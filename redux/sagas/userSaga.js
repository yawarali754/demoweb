//this file will contain our actions, and api that gonna dispatching a reducer
import { put, call } from 'redux-saga/effects'
import {
  getTokenService,
  loginUserService,
  registerUserService,
  setPasswordService,
  updatePasswordService,
  verifyEmailService,
  verifyOtpService,
} from '../services/authenticationService'
import {
  loginFailed,
  loginSuccess,
  logout,
  setPassSuccess,
  setPasswordFailed,
  tokenReceived,
  tokenRecFailed,
  verifyEmailFailed,
  verifyEmailSuccess,
  verifyOtpFailed,
  verifyOTPSuccess,
} from '../actions/authentication'
import * as types from '../actions/userActions'

export function* getTokenSaga(payload) {
  try {
    const tokenRec = yield call(getTokenService, payload)
    const data = tokenRec
    yield put(tokenReceived(data))
  } catch (error) {
    yield put(tokenRecFailed(error))
  }
}

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload)
    const data = response
    yield put(loginSuccess(data))
  } catch (error) {
    yield put({ type: types.USER_LOGIN_FAIL, error })
  }
}
export function* verifyEmailSaga(payload) {
  try {
    const res = yield call(verifyEmailService, payload)
    const data = res
    yield put(verifyEmailSuccess(data))
  } catch (error) {
    yield put(verifyEmailFailed(error))
  }
}
export function* verifyOtpSaga(payload) {
  try {
    const response = yield call(verifyOtpService, payload)
    yield put(verifyOTPSuccess(response))
  } catch (error) {
    yield put(verifyOtpFailed(response.error))
  }
}
export function* setPasswordSaga(payload) {
  try {
    const pass = yield call(setPasswordService, payload)
    yield put(setPassSuccess(pass))
  } catch (error) {
    yield put(setPasswordFailed(error))
    return error
  }
}
export function* updatePasswordSaga(payload) {
  try {
    const updatePass = yield call(updatePasswordService, payload)
    yield put[{ type: types.UPDATE_PASSWORD, updatePass }]
  } catch (error) {
    return error
  }
}

export function* logOutSaga() {
  yield put(logout())
}
