import * as types from '../types/ticket'

export const setTicketQuantity = (quantity, movie = null) => ({
  type: types.SET_TICKET_QUANTITY,
  quantity,
  movie
})
