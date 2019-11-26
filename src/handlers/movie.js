import * as types from '../types/movie'
import * as actions from '../actions/movie'
import * as ticketActions from '../actions/ticket'
import * as ticketTypes from '../types/ticket'

import { output } from '../lib/io'

const handleShowSynopsis = (state, action) => {
  const movie = action.movie || state.movie.selectedItem
  if (movie) {
    output(`
    Le synopsis du film ${movie} est ...
    `)
  } else {
    output(`
    De quel film parlez-vous ?
    `, actions.showSynopsis)
  }
}

const handleReplyMovieSuggestion = (state, action, callHandler) => {
  if (!action.accept) {
    return callHandler(ticketTypes.SET_TICKET_QUANTITY) // affiche
  }
  // si la personne a accepté le reducer a mis la valeur de suggestionItem dans selectedItem
  if (state.ticket.quantity) {
    return output(`
    J'ai ajouté ${state.ticket.quantity} billets pour ${state.movie.selectedItem}
    `)
  }
  // ce cas devrait pas arrivé parceque on passe pas dans ce handler sans avoir setter une quantité avant
  return output(`
  Combien de ticket pour ${state.movie.selectedItem} voulez-vous ?
  `, ticketActions.setTicketQuantity) // la personne répond par {quantity} mais peux aussi passer à une autre intent
}

const handleSetSelectedMovie = (state, action) => {
  if (state.ticket.quantity) {
    return output(`
    J'ai ajouté ${state.ticket.quantity} billets pour ${state.movie.selectedItem}
    `)
  }
  return output(`
  Combien de ticket pour ${state.movie.selectedItem} voulez-vous ?
  `, ticketActions.setTicketQuantity) // la personne répond par {quantity} mais peux aussi passer à une autre intent
}

export default {
  [types.SHOW_SYNOPSIS]: handleShowSynopsis,
  [types.SET_SELECTED_MOVIE]: handleSetSelectedMovie,
  [types.REPLY_MOVIE_SUGGESTION]: handleReplyMovieSuggestion
}
