import * as types from '../actions/flightActions'

export const fligthSearch = (state = {}, action) => {
  let response = action
  switch (action.type) {
    case types.REQUEST_FLIGHT_DATA:
      return {
        ...state,
        searchData: action.data,
        loading: true,
      }
    case types.RECIEVE_FLIGHT_DATA:
      return {
        ...state,
        response,
        loading: false,
      }
    case types.FLIGHT_SEARCH_FAILED:
      return { ...state, response, loading: false }
    case types.FLIGHT_REVALIDATE:
      return { ...state, validation: action.flightData }
    case types.REC_FLIGHT_VALIDATION:
      return { ...state, res: action }
    case types.FLIGHT_NOT_VALID:
      return {
        ...state,
        res: action,
        error,
      }
    case types.CREATE_PNR:
      return { ...state, pnrRequest: action.pnrRequest, loading: true }
    case types.PNR_CREATED:
      return { ...state, created: action, loading: false }
    case types.PNR_CREATION_FAILED:
      return { ...state, error: action, loading: false }
    case types.SAVE_BOOKING:
      return { ...state, saveBooking: action.saveBooking }
    case types.BOOKING_SAVED:
      return { ...state, bookingSaved: action }
    case types.SAVE_BOOKING_FAILED:
      return { ...state, error: action, loading: false }
    case types.GET_SAVE_BOOKING:
      return { ...state, bookingMail: action.bookingMail, loading: true }
    case types.SAVED_BOOKING_RECEIVED:
      return { ...state, savedBookingRec: action, loading: false }
    case types.GET_SAVE_BOOKING_FAILED:
      return { ...state, error: action, loading: false }
      case types.INCREMENT: 
      return state + 1;
        case types.DECREMENT: 
        return state - 1;
    default:
      return state
  }
}
