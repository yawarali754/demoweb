export const REQUEST_FLIGHT_DATA = 'REQUEST_FLIGHT_DATA'
export const RECIEVE_FLIGHT_DATA = 'RECEIVE_FLIGHT_DATA'
export const FLIGHT_SEARCH_FAILED = 'FLIGHT_SEARCH_FAIL'
export const FLIGHT_REVALIDATE = 'FLIGHT_REVALIDATE'
export const REC_FLIGHT_VALIDATION = 'REC_FLIGHT_VALIDATION'
export const FLIGHT_NOT_VALID = 'FLIGHT_NOT_VALID'
export const CREATE_PNR = 'CREATE_PNR'
export const PNR_CREATED = 'PNR_CREATED'
export const PNR_CREATION_FAILED = 'PNR_CREATION_FAILED'
export const SAVE_BOOKING = 'SAVE_BOOKING'
export const SAVE_BOOKING_FAILED = 'SAVE_BOOKING_FAILED'
export const BOOKING_SAVED = 'BOOKING_SAVED'
export const GET_SAVE_BOOKING = 'GET_SAVE_BOOKING'
export const GET_SAVE_BOOKING_FAILED = 'GET_SAVE_BOOKING_FAILED'
export const SAVED_BOOKING_RECEIVED = 'SAVED_BOOKING_RECEIVED'

export const requestFlightData = (data) => ({
  type: REQUEST_FLIGHT_DATA,
  data,
  loading: true,
})
export const getFlightData = (data) => {
  return {
    type: RECIEVE_FLIGHT_DATA,
    data,
  }
}
export const requestFlightFailed = (error) => {
  return {
    type: FLIGHT_SEARCH_FAILED,
    error,
  }
}
export const requestFLightValidation = (flightData) => {
  return {
    type: FLIGHT_REVALIDATE,
    flightData,
  }
}
export const flightISValid = (validation) => {
  return {
    type: REC_FLIGHT_VALIDATION,
    validation,
  }
}
export const flightNotValid = (error) => {
  return {
    type: FLIGHT_NOT_VALID,
    error,
  }
}
export const createPNR = (pnrRequest) => {
  return {
    type: CREATE_PNR,
    pnrRequest,
    loading: true,
  }
}
export const pnrCreated = (created) => {
  return {
    type: PNR_CREATED,
    created,
    loading: false,
  }
}
export const pnrCreationFailed = (error) => {
  return {
    type: PNR_CREATION_FAILED,
    error,
    loading: false,
  }
}
export const saveBookingAction = (saveBooking) => {
  return {
    type: SAVE_BOOKING,
    saveBooking,
  }
}
export const bookingSavedd = (bookingSaved) => {
  return {
    type: BOOKING_SAVED,
    bookingSaved,
  }
}
export const saveBookingFailed = (error) => {
  return {
    type: SAVE_BOOKING_FAILED,
    error,
    loading: false,
  }
}
export const getSavedBooking = (bookingMail) => {
  return {
    type: GET_SAVE_BOOKING,
    bookingMail,
    loading: true,
  }
}
export const savedBookingRec = (savedBookingRec) => {
  return {
    type: SAVED_BOOKING_RECEIVED,
    savedBookingRec,
    loading: false,
  }
}

export const getSavedBookingFailed = (error) => {
  return {
    type: GET_SAVE_BOOKING_FAILED,
    error,
    loading: false,
  }
}
