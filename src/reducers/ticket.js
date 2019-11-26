import * as types from '../types/ticket'

const initialState = {
  quantity: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TICKET_QUANTITY:
      return {
        ...state,
        quantity: action.quantity
      }
    default:
      return state
  }
}
