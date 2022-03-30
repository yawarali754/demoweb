import { toast } from 'react-toastify'

const AuthenticationModel = require('./authentication_model')

export const getFlightService = async (request) => {
  const FLIGHT_SEARCH_API = `https://api-crt.cert.havail.sabre.com/v4.2.0/shop/flights?mode=live`

  const authModel = new AuthenticationModel({
    apiEndPoint: 'https://api-crt.cert.havail.sabre.com',
    secret: process.env.rest_credentials,
  })
  const abc = await authModel.readRequest(async (accessToken) => {
    const parameters = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request.data.dataa),
    }
    return await fetch(FLIGHT_SEARCH_API, parameters)
      .then((response) => {
        if (response.status >= 300) {
          throw new Error(`Server responsed with Error ${response.status}`)
        }
        return response.json()
      })
      .then((json) => {
        return json
      })
      .catch((error) => {
        toast.error(error.message, {
          position: 'bottom-right',
        })
        return error.message
      })
  })

  return abc
}
export const checkFlightValidation = async (request) => {
  const CHECK_VALIDATION =
    'https://api-crt.cert.havail.sabre.com/v4/shop/flights/revalidate'

  const authModel = new AuthenticationModel({
    apiEndPoint: 'https://api-crt.cert.havail.sabre.com',
    secret: process.env.rest_credentials,
  })
  const flightVal = await authModel.readRequest(async (accessToken) => {
    const parameters = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request.flightData),
    }
    return await fetch(CHECK_VALIDATION, parameters)
      .then((response) => {
        if (response.status >= 300) {
          throw new Error(`Server responsed with Error ${response.status}`)
        }
        return response.json()
      })
      .then((json) => {
        return json
      })
      .catch((error) => {
        toast.error(error.message, {
          position: 'bottom-right',
        })
        return error.message
      })
  })

  return flightVal
}
export const createPnrService = async (request) => {
  const CREATE_PNR =
    'https://api-crt.cert.havail.sabre.com/v2.4.0/passenger/records?mode=create'
  const authModel = new AuthenticationModel({
    apiEndPoint: 'https://api-crt.cert.havail.sabre.com',
    secret: process.env.rest_credentials,
  })
  const pnr = await authModel.readRequest(async (accessToken) => {
    const parameters = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request.pnrRequest),
    }
    return await fetch(CREATE_PNR, parameters)
      .then((response) => {
        if (response.status >= 300) {
          throw new Error(`Server responsed with Error ${response.status}`)
        }
        return response.json()
      })
      .then((json) => {
        return json
      })
      .catch((error) => {
        toast.error(error.message, {
          position: 'bottom-right',
        })
        return error.message
      })
  })

  return pnr
}

export const createBookingService = (request) => {
  const SAVE_BOOKING_API = `https://ota-structured.herokuapp.com/api/booking/save_booking`
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request.saveBooking),
  }
  try {
    return fetch(SAVE_BOOKING_API, parameters)
      .then((response) => {
        if (response.status >= 300) {
          throw new Error('Server response with Error')
        }
        return response.json()
      })
      .then((json) => {
        return json
      })
  } catch (error) {
    return error
  }
}

export const getBookingService = (request) => {
  const GET_BOOKING_API = `https://ota-structured.herokuapp.com/api/booking/get_booking`
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request.bookingMail),
  }
  try {
    return fetch(GET_BOOKING_API, parameters)
      .then((response) => {
        if (response.status >= 300) {
          throw new Error('Server response with Error')
        }
        return response.json()
      })
      .then((json) => {
        return json
      })
  } catch (error) {
    return error
  }
}
