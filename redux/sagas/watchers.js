import { takeLatest, take } from 'redux-saga/effects'
import * as types from '../actions/userActions'
import * as typess from '../actions/flightActions'
import * as typees from '../actions/offersActions'
import * as typpes from '../actions/packagesAction'
import {
  getTokenSaga,
  loginSaga,
  logOutSaga,
  setPasswordSaga,
  updatePasswordSaga,
  verifyEmailSaga,
  verifyOtpSaga,
} from '../sagas/userSaga'
import {
  bookingCreation,
  flightSaga,
  flightValidation,
  getSavedBooking,
  pnrCreation,
  // incrementAsync,
} from './flightSaga'
import {
  createOfferSaga,
  deleteOfferSaga,
  offersSaga,
  updateOfferSaga,
} from './offersSaga'
import {
  createPackageSaga,
  deletePackageSaga,
  packageSaga,
  updatePackageSaga,
} from './packagesSaga'

export default function* watchUserAuthentication() {
  yield takeLatest(types.GET_TOKEN, getTokenSaga)
  yield takeLatest(types.USER_LOGIN_REQUEST, loginSaga)
  yield takeLatest(typess.REQUEST_FLIGHT_DATA, flightSaga)
  yield takeLatest(typess.FLIGHT_REVALIDATE, flightValidation)
  yield takeLatest(typess.CREATE_PNR, pnrCreation)
  yield takeLatest(typess.SAVE_BOOKING, bookingCreation)
  yield takeLatest(typess.GET_SAVE_BOOKING, getSavedBooking)
  yield takeLatest(types.VERIFY_EMAIL, verifyEmailSaga)
  yield takeLatest(types.CONFIRM_OTP, verifyOtpSaga)
  yield takeLatest(types.SET_PASSWORD, setPasswordSaga)
  yield takeLatest(types.UPDATE_PASSWORD, updatePasswordSaga)
  yield takeLatest(typees.READ_OFFER, offersSaga)
  yield takeLatest(typpes.READ_PACKAGES, packageSaga)
  yield takeLatest(typpes.CREATE_PACKAGES, createPackageSaga)
  yield takeLatest(typpes.DELETE_PACKAGES, deletePackageSaga)
  yield takeLatest(typpes.UPDATE_PACKAGES, updatePackageSaga)
  yield takeLatest(typees.CREATE_OFFER, createOfferSaga)
  yield takeLatest(typees.DELETE_OFFER, deleteOfferSaga)
  yield takeLatest(typees.UPDATE_OFFER, updateOfferSaga)
  // yield takeLatest(typees.INCREMENT_ASYNC, incrementAsync)
  yield take(types.USER_LOGOUT, logOutSaga)

  console.log('Hello coder from watchers!!')
}
