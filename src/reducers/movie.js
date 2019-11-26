import * as types from '../types/movie'
import * as ticketTypes from '../types/ticket'

const initialState = {
  selectedItem: null,
  suggestionItem: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SELECTED_MOVIE:
      return {
        ...state,
        selectedItem: action.movie
      }
    case types.SHOW_SYNOPSIS:
      if (!action.movie) return state
      return {
        ...state,
        suggestionItem: action.movie
      }
    case types.REPLY_MOVIE_SUGGESTION:
      if (!action.accept) {
        return {
          ...state,
          selectedItem: action.movie, // possiblement null si la personne refuse sans précisé ce qu'il veut voire à la place
          suggestionItem: null // si la personne refuse la suggestion on l'enlève
        }
      }
      return {
        ...state,
        selectedItem: state.suggestionItem
      }
    // EXTERNAL
    case ticketTypes.SET_TICKET_QUANTITY:
      if (!action.movie) return state
      return {
        ...state,
        selectedItem: action.movie
      }
    default:
      return state
  }
}
