import { put, call } from 'redux-saga/effects'
import {
  deleteOfferSuccess,
  offerCreatedSuccess,
  offersRec,
  updateOfferSuccess,
} from '../actions/offersActions'
import {
  createOfferSerive,
  deleteOfferSerive,
  getoffersService,
  updateOfferSerive,
} from '../services/offerService'

export function* offersSaga(payload) {
  try {
    const response = yield call(getoffersService, payload)
    yield put(offersRec(response))
  } catch (error) {
    return error
  }
}
export function* createOfferSaga(payload) {
  try {
    const response = yield call(createOfferSerive, payload)
    yield put(offerCreatedSuccess(response))
  } catch (error) {
    return error
  }
}
export function* deleteOfferSaga(payload) {
  try {
    const response = yield call(deleteOfferSerive, payload)
    yield put(deleteOfferSuccess(response))
  } catch (error) {
    console.log(error)
    return error
  }
}
export function* updateOfferSaga(payload) {
  try {
    const response = yield call(updateOfferSerive, payload)
    yield put(updateOfferSuccess(response))
  } catch (error) {
    return error
  }
}
