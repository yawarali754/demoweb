import { toast } from 'react-toastify'

export const getPackagesService = () => {
  const GET_PACKAGES_API = `https://ota-structured.herokuapp.com/api/package/read_pack`
  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    return fetch(GET_PACKAGES_API, parameters)
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
    return error.message
  }
}

export const createPackagesService = (request) => {
  const CREATE_PACKAGE_API = `https://ota-structured.herokuapp.com/api/package/create_pack`
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request.createPackage),
  }
  try {
    return fetch(CREATE_PACKAGE_API, parameters)
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
    return error.message
  }
}
export const deletePackagesService = (request) => {
  const DELETE_PACKAGE_API = `https://ota-structured.herokuapp.com/api/package/delete_pack`
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request.packageID),
  }
  try {
    return fetch(DELETE_PACKAGE_API, parameters)
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
export const updatePackagesService = (request) => {
  const UPDATE_PACKAGE_API = `https://ota-structured.herokuapp.com/api/package/update_pack`
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request.updatePackageId),
  }
  try {
    return fetch(UPDATE_PACKAGE_API, parameters)
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
