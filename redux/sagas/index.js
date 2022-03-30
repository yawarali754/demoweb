//in this file we import our saga.js
import { fork } from 'redux-saga/effects'
import watchUserAuthentication from './watchers'

export default function* startForman() {
  yield fork(watchUserAuthentication)
}
