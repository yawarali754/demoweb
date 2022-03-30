import { put, call } from 'redux-saga/effects'
import {
  createPackageSuccess,
  deletePackageFailed,
  deletePackgeSucces,
  packageCreationFailed,
  packageRec,
  packageRecFailed,
  updatePackageFailed,
  updatePackageSuccess,
} from '../actions/packagesAction'
import {
  createPackagesService,
  deletePackagesService,
  getPackagesService,
  updatePackagesService,
} from '../services/packageService'

export function* packageSaga(payload) {
  try {
    const response = yield call(getPackagesService, payload)
    yield put(packageRec(response))
  } catch (error) {
    yield put(packageRecFailed(error.message))
  }
}
export function* createPackageSaga(payload) {
  try {
    const response = yield call(createPackagesService, payload)
    yield put(createPackageSuccess(response))
  } catch (error) {
    yield put(packageCreationFailed(error.message))
  }
}
export function* deletePackageSaga(payload) {
  try {
    const response = yield call(deletePackagesService, payload)
    yield put(deletePackgeSucces(response))
  } catch (error) {
    yield put(deletePackageFailed(error.message))
  }
}
export function* updatePackageSaga(payload) {
  try {
    const response = yield call(updatePackagesService, payload)
    yield put(updatePackageSuccess, response)
  } catch (error) {
    yield put(updatePackageFailed(error))
    return error
  }
}
