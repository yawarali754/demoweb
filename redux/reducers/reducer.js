import { combineReducers } from 'redux'
import { fligthSearch } from './flightReducer'
import { offerReducer } from './offerReducer'
import { packagesReducer } from './packagesReducer'
import { authReducer, userLoginReducer, verifyUser } from './userReducer'

export default combineReducers({
  authReducer: authReducer,
  userLogin: userLoginReducer,
  verification: verifyUser,
  offersReducer: offerReducer,
  flightData: fligthSearch,
  packagesReducer: packagesReducer,
})
