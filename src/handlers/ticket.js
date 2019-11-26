import * as types from '../types/ticket'
import * as movieActions from '../actions/movie'

import { output } from '../lib/io'

const handleSetTicketQuantity = (state, action) => {
  if (state.movie.selectedItem) {
    return output(`
        J'ai ajouté ${action.quantity} billets pour ${state.movie.selectedItem}
      `)
  }
  if (state.movie.suggestionItem) {
    return output(`
      Voulez-vous ajoutez ${action.quantity} billets pour le film ${state.movie.suggestionItem} ?
      `, movieActions.replyMovieSuggestion) // si l'input n'est pas une action elle utilisé comme argument de l'action replyMovieSuggestion
  }
  return output(`
      Pour quel film voulez-vous ajoutée ${action.quantity} billet ?
    `, movieActions.setSelectedMovie) // pareil
}

export default {
  [types.SET_TICKET_QUANTITY]: handleSetTicketQuantity
}
