import * as types from '../types/main'

import { output } from '../lib/io'

const handleGreetings = (state, action) => {
  output(`
  Bonjour je suis le bot FooBar, avec moi vous pouvez reserver une ou plusieurs places de cinéma.
  `)
}

const handleRequestSummary = (state, action) => {
  output(`
  --- ${state.ticket.quantity} billets pour ${state.movie.selectedItem} ---
  `)
}

export default {
  [types.GREETINGS]: handleGreetings,
  [types.REQUEST_SUMMARY]: handleRequestSummary
}
