import { put, call } from 'redux-saga/effects'
import {
  checkFlightValidation,
  createBookingService,
  createPnrService,
  getBookingService,
  getFlightService,
} from '../services/flightService'
import {
  bookingSavedd,
  flightISValid,
  flightNotValid,
  getFlightData,
  getSavedBookingFailed,
  pnrCreated,
  pnrCreationFailed,
  requestFlightFailed,
  saveBookingFailed,
  savedBookingRec,
  // INCREMENT,
  // DECREMENT,
  // INCREMENT_ASYNC,
} from '../actions/flightActions'

export function* flightSaga(payload) {
  try {
    const response = yield call(getFlightService, payload)
    const data = response
    yield put(getFlightData(data))
  } catch (error) {
    yield put(requestFlightFailed(error))
  }
}
export function* flightValidation(payload) {
  try {
    const response = yield call(checkFlightValidation, payload)
    yield put(flightISValid(response))
  } catch (error) {
    yield put(flightNotValid(error))
  }
}
export function* pnrCreation(payload) {
  console.log(payload)
  try {
    const response = yield call(createPnrService, payload)
    yield put(pnrCreated(response))
  } catch (error) {
    yield put(pnrCreationFailed(error.message))
  }
}
export function* bookingCreation(payload) {
  try {
    const response = yield call(createBookingService, payload)
    yield put(bookingSavedd(response))
  } catch (error) {
    yield put(saveBookingFailed(error.message))
  }
}
export function* getSavedBooking(payload) {
  try {
    const response = yield call(getBookingService, payload)
    yield put(savedBookingRec(response))
  } catch (error) {
    yield put(getSavedBookingFailed(error))
  }
}

// export function* incrementAsync() {
//   yield put({ type: INCREMENT });
//   yield delay(1000);
//   yield put({ type: DECREMENT });
//   yield delay(1000);
//   yield put({ type: INCREMENT });
//   yield delay(1000);
//   yield put({ type: DECREMENT });
// }