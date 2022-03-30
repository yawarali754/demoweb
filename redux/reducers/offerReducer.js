import * as types from '../actions/offersActions'

const initialState = {
  loading: false,
}

export const offerReducer = (state = initialState, action) => {
  let offer = action
  switch (action.type) {
    case types.CREATE_OFFER:
      return { ...state, loading: true }
    case types.CREATED_OFFER_SUCCESSFUL:
      console.log('stateee and offer  ', state, offer)
      return {
        ...state,
        offer: {
          ...state.offer,
          offer: [...state.offer.offer, offer.offerCreated],
        },
        loading: false,
      }
    case types.READ_OFFER:
      return { ...state, offer, loading: true }
    case types.OFFERS_RECEIVED:
      console.log('read offer stateee', state)
      return { ...state, offer, loading: false }
    case types.UPDATE_OFFER:
      return { ...state, offer, loading: true }
    case types.UPDATED_OFFER_SUCCESFUL:
      return { ...state, offer, loading: false }
    case types.DELETE_OFFER:
      const newOffer = state?.offer?.offer?.filter(
        (offerr) => offerr._id !== action.offerId?._id
      )
      return { ...state, newOffer }
    case types.DELETE_OFFER_SUCCESSFUL:
      const offerArray = state?.newOffer
      return { ...state, offer: { offer: offerArray } }
    default:
      return state
  }
}
