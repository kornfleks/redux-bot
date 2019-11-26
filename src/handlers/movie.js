import * as types from '../types/movie'
import * as actions from '../actions/movie'
import * as ticketActions from '../actions/ticket'

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

const handleReplyMovieSuggestion = (state, action, dispatch) => {
  if (!action.accept) {
    // si la personne à déjà eu une suggestion de film, c'est quel a déjà une quantité de billet
    // si elle a refusé la suggestion est effacé
    // on lui revalide sa quantité de billet,
    // le handleSetTicket lui demandera juste quel film elle veut voire si elle l'a pas précisé en refusant
    // si elle a précisé le film en refusant il lui dira qu'il a ajouté X billet pour le film Y
    // on pourrait aussi le faire ici, mais c'est plus simple de laisser faire l'autre handler
    // a voire si on pourrait pas avoir accès au autre handler pour les appeler directement d'ici
    return dispatch(ticketActions.setTicketQuantity(state.ticket.quantity))
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
