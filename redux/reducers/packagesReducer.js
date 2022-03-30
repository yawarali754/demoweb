import * as types from '../actions/packagesAction'

export const packagesReducer = (state = {}, action) => {
  let packages = action
  switch (action.type) {
    case types.READ_PACKAGES:
      return {
        ...state,
        packages,
        loading: true,
      }
    case types.PACKAGES_RECEIVED:
      console.log('read packages stateee', state)

      return {
        ...state,
        packages,
        loading: false,
      }
    case types.PACKAGES_RECEIVED_FAILED:
      return {
        ...state,
        error,
        loading: false,
      }
    case types.CREATE_PACKAGES:
      return {
        ...state,
        createPackage: action,
        loading: true,
      }
    case types.PACKAGE_CREATED:
      console.log('stateee and packages  ', state, packages)
      return {
        ...state,
        packages: {
          ...state.packages,
          packagge: [...state.packages.packagge, packages.packageCreated],
        },
        loading: false,
      }
    case types.PACKAGE_CREATION_FAILED:
      return {
        ...state,
        error: action,
        loading: false,
      }
    case types.DELETE_PACKAGES:
      const newPackage = state.packages.packagge.filter(
        (pack) => pack._id !== action.packageID?._id
      )
      return { ...state, newPackage }
    case types.DELETE_PACKAGES_SUCCESS:
      const packArray = state?.newPackage
      return {
        ...state,
        packages: { packagge: packArray },
      }
    case types.DELETE_PACKAGES_FAILED:
      return {
        ...state,
        error,
      }
    case types.UPDATE_PACKAGES:
      return {
        ...state,
        packages,
      }
    case types.UPDATE_PACKAGE_SUCCESSFUL:
      return {
        ...state,
        packages,
      }
    default:
      return state
  }
}
