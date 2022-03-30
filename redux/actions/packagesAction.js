export const CREATE_PACKAGES = 'CREATE_PACKAGES'
export const PACKAGE_CREATED = 'PACKAGE_CREATED'
export const PACKAGE_CREATION_FAILED = 'PACKAGE_CREATION_FAILED'
export const READ_PACKAGES = 'READ_PACKAGES'
export const PACKAGES_RECEIVED = 'PACKAGES_RECEIVED'
export const PACKAGES_RECEIVED_FAILED = 'PACKAGES_RECEIVED_FAILED'
export const UPDATE_PACKAGES = 'UPDATE_PACKAGES'
export const UPDATE_PACKAGE_SUCCESSFUL = 'UPDATE_PACKAGE_SUCCESSFUL'
export const UPDATE_PACKAGE_FAILED = 'UPDATE_PACKAGE_FAILED'
export const DELETE_PACKAGES = 'DELETE_PACKAGES'
export const DELETE_PACKAGES_SUCCESS = 'DELETE_PACKAGE_SUCCESS'
export const DELETE_PACKAGES_FAILED = 'DELETE_PACKAGE_FAILED'

export const readPackageAction = () => {
  return {
    type: READ_PACKAGES,
    loading: true,
  }
}
export const packageRec = (packagge) => {
  return {
    type: PACKAGES_RECEIVED,
    packagge,
    loading: false,
  }
}
export const packageRecFailed = (error) => {
  return {
    type: PACKAGES_RECEIVED_FAILED,
    error,
    loading: false,
  }
}
export const createPackageAction = (createPackage) => {
  return {
    type: CREATE_PACKAGES,
    createPackage,
    loading: true,
  }
}
export const createPackageSuccess = (packageCreated) => {
  return {
    type: PACKAGE_CREATED,
    packageCreated,
    loading: false,
  }
}
export const packageCreationFailed = (error) => {
  return {
    type: PACKAGE_CREATION_FAILED,
    error,
    loading: false,
  }
}

export const updatePackageAction = (updatePackageId) => {
  return {
    type: UPDATE_PACKAGES,
    updatePackageId,
    loading: true,
  }
}
export const updatePackageSuccess = (packageUpdateSuccess) => {
  return {
    type: UPDATED_PACKAGE_SUCCESFUL,
    packageUpdateSuccess,
    loading: false,
  }
}
export const updatePackageFailed = (error) => {
  return {
    type: UPDATE_PACKAGE_FAILED,
    error,
    loading: false,
  }
}
export const deletePackgeAction = (packageID) => {
  return {
    type: DELETE_PACKAGES,
    packageID,
    loading: true,
  }
}
export const deletePackgeSucces = (delPackageSuccess) => {
  return {
    type: DELETE_PACKAGES_SUCCESS,
    delPackageSuccess,
    loading: false,
  }
}
export const deletePackageFailed = (error) => {
  return {
    type: DELETE_PACKAGES_FAILED,
    error,
    loading: false,
  }
}
