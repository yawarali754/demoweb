export const CREATE_OFFER = 'CREATE_OFFER'
export const CREATED_OFFER_SUCCESSFUL = 'CREATE_OFFER_SUCCESSFUL'
export const READ_OFFER = 'READ_OFFER'
export const OFFERS_RECEIVED = 'OFFERS_RECEIVED'
export const UPDATE_OFFER = 'UPDATE_OFFER'
export const UPDATED_OFFER_SUCCESFUL = 'UPDATED_OFFER_SUCCESSFUL'
export const DELETE_OFFER = 'DELETE-OFFER'
export const DELETE_OFFER_SUCCESSFUL = 'DELETE_OFFER_SUCCESFUL'

export const readOfferAction = () => {
  return {
    type: READ_OFFER,
    loading: true,
  }
}
export const offersRec = (offer) => {
  return {
    type: OFFERS_RECEIVED,
    offer,
    loading: false,
  }
}

export const createOfferAction = (offer) => {
  return {
    type: CREATE_OFFER,
    offer,
    loading: true,
  }
}
export const offerCreatedSuccess = (offerCreated) => {
  return {
    type: CREATED_OFFER_SUCCESSFUL,
    offerCreated,
    loading: false,
  }
}

export const updateOfferAction = (offerUpdateId) => {
  return {
    type: UPDATE_OFFER,
    offerUpdateId,
    loading: true,
  }
}
export const updateOfferSuccess = (offerUpdatedSuccess) => {
  return {
    type: UPDATED_OFFER_SUCCESFUL,
    offerUpdatedSuccess,
    loading: false,
  }
}

export const deleteOfferAction = (offerId) => {
  return {
    type: DELETE_OFFER,
    offerId,
    loading: true,
  }
}
export const deleteOfferSuccess = (deleteOffer) => {
  return {
    type: DELETE_OFFER_SUCCESSFUL,
    deleteOffer,
    loading: false,
  }
}
