import * as types from '../types/movie'

export const setSelectedMovie = (movie) => ({
  type: types.SET_SELECTED_MOVIE,
  movie
})

/**
 * 
 * @param {*} movie (optionnal) movie which synopsis have to be shown
 */
export const showSynopsis = (movie = null) => ({
  type: types.SHOW_SYNOPSIS,
  movie
})


export const replyMovieSuggestion = (accept = false, movie = null) => ({
  type: types.REPLY_MOVIE_SUGGESTION,
  accept,
  movie
})
