import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import 'regenerator-runtime/runtime'
import rootSaga from '../redux/sagas/index'
import combineReducer from '../redux/reducers/reducer'

let userLoggedIn

if (typeof window !== 'undefined') {
  userLoggedIn = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : {}
}

const initialState = {
  userLogin: userLoggedIn,
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)

export default store
