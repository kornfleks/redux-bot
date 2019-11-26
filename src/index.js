import { enableBatching } from 'redux-batched-actions'
import { combineReducers, createStore, applyMiddleware } from 'redux'

import applyHandlers from './lib/applyHandlers'
import { input } from './lib/io'

import movieReducer from './reducers/movie'
import ticketReducer from './reducers/ticket'

import mainHandler from './handlers/main'
import movieHandler from './handlers/movie'
import ticketHandler from './handlers/ticket'

import defaultTestSuite from './testSuites/default'
import ticketAcceptSuggestion from './testSuites/ticketAcceptSuggestion'
import ticketRefuseSuggestion from './testSuites/ticketRefuseSuggestion'
import ticketRefuseSuggestionEnhanced from './testSuites/ticketRefuseSuggestionEnhanced'
import ticketNoSuggestion from './testSuites/ticketNoSuggestion'

import { startPrompt } from './prompt'

const reducer = enableBatching(
  combineReducers({
    movie: movieReducer,
    ticket: ticketReducer
  })
)

const createUnitStore = () => 
  createStore(
    reducer,
    applyMiddleware(
      applyHandlers(
        mainHandler,
        movieHandler,
        ticketHandler
      )
    )
  )

startPrompt(createUnitStore())

//defaultTestSuite(input(createUnitStore().dispatch))
//ticketAcceptSuggestion(input(createUnitStore().dispatch))
//ticketRefuseSuggestion(input(createUnitStore().dispatch))
//ticketRefuseSuggestionEnhanced(input(createUnitStore().dispatch))
//ticketNoSuggestion(input(createUnitStore().dispatch))
