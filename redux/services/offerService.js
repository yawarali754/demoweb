import { toast } from 'react-toastify'

export const getoffersService = () => {
  const GET_OFFER_API = `https://ota-structured.herokuapp.com/api/offer/read_offer`
  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    return fetch(GET_OFFER_API, parameters)
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

export const createOfferSerive = (request) => {
  const CREATE_OFFER_API = `https://ota-structured.herokuapp.com/api/offer/create_offer`
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request.offer),
  }
  try {
    return fetch(CREATE_OFFER_API, parameters)
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
export const deleteOfferSerive = (request) => {
  const DELETE_OFFER_API = `https://ota-structured.herokuapp.com/api/offer/delete_offer`
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request.offerId),
  }
  try {
    return fetch(DELETE_OFFER_API, parameters)
      .then((response) => {
        if (response.status >= 300) {
          throw new Error('Server response with Error')
        }
        return response.json()
      })
      .then((json) => {
        toast.success(json.msg, {
          position: 'bottom-right',
        })
        return json
      })
  } catch (error) {
    return error
  }
}
export const updateOfferSerive = (request) => {
  const UPDATE_OFFER_API = `https://ota-structured.herokuapp.com/api/offer/update_offer`
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request.offerUpdateId),
  }
  try {
    return fetch(UPDATE_OFFER_API, parameters)
      .then((response) => {
        if (response.status >= 300) {
          throw new Error('Server response with Error')
        }
        return response.json()
      })
      .then((json) => {
        toast.success(json.msg, {
          position: 'bottom-right',
        })
        return json
      })
  } catch (error) {
    toast.error(error.message, {
      position: 'bottom-right',
    })
    return error.message
  }
}
