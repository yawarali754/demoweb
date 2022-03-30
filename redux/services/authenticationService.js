import { toast } from 'react-toastify'

export const getTokenService = (request) => {
  const GET_TOKEN_API = 'https://api-crt.cert.havail.sabre.com/v2/auth/token'

  const parameters = {
    method: 'POST',
    headers: {
      Authorization: `Basic ${process.env.rest_credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: request.token,
  }
  try {
    return fetch(GET_TOKEN_API, parameters)
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
    toast.error(error.message, {
      position: 'bottom-right',
    })
    return error
  }
}

export const loginUserService = (request) => {
  const LOGIN_USER_API = 'https://ota-structured.herokuapp.com/api/auth/login'

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request.user),
  }
  try {
    return fetch(LOGIN_USER_API, parameters)
      .then((response) => {
        if (response.status >= 300) {
          throw new Error('Server response with Error')
        }
        return response.json()
      })
      .then((json) => {
        localStorage.setItem('userInfo', JSON.stringify(json))
        return json
      })
  } catch (error) {
    toast.error(error.message, {
      position: 'bottom-right',
    })
    return error
  }
}

export const verifyEmailService = (request) => {
  const VERIFY_USER_API = 'https://ota-structured.herokuapp.com/api/auth/signup'
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request.email),
  }
  try {
    return fetch(VERIFY_USER_API, parameters)
      .then((response) => {
        if (response.status >= 300) {
          throw new Error('Error from Server Response')
        }
        return response.json()
      })
      .then((json) => {
        return json
      })
  } catch (error) {
    toast.error(error.msg, {
      position: 'bottom-right',
    })
    return error
  }
}
export const verifyOtpService = (request) => {
  const VERIFY_OTP_URL = 'https://ota-structured.herokuapp.com/api/auth/otp_ver'
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request.otp),
  }
  try {
    return fetch(VERIFY_OTP_URL, parameters)
      .then((response) => {
        if (response.status >= 300) {
          throw new Error('Error from Server Response')
        }
        return response.json()
      })
      .then((json) => {
        return json
      })
  } catch (error) {
    toast.error(error.message, {
      position: 'bottom-right',
    })
    return error
  }
}
export const setPasswordService = (request) => {
  const SET_PASSWORD_URL =
    'https://ota-structured.herokuapp.com/api/auth/set_pass'
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request.password),
  }
  try {
    return fetch(SET_PASSWORD_URL, parameters)
      .then((response) => {
        if (response.status >= 300) {
          throw new Error('Error from Server Response')
        }
        return response.json()
      })
      .then((json) => {
        return json
      })
  } catch (error) {
    toast.error(error.message, {
      position: 'bottom-right',
    })
    return error
  }
}
export const updatePasswordService = (request) => {
  const UPDATE_PASSWORD_URL =
    'https://ota-structured.herokuapp.com/api/auth/up_pass'
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request.password),
  }
  try {
    return fetch(UPDATE_PASSWORD_URL, parameters)
      .then((response) => {
        if (response.status >= 300) {
          throw new Error('Error from Server Response')
        }
        return response.json()
      })
      .then((json) => {
        return json
      })
  } catch (error) {
    toast.error(error.message, {
      position: 'bottom-right',
    })
    return error
  }
}
