import * as mainActions from '../actions/main'
import * as movieActions from '../actions/movie'
import * as ticketActions from '../actions/ticket'

export default input => {
  console.log('[TEST_SUITE]: accept suggestion')
  input(mainActions.greetings()) // default
  input(movieActions.showSynopsis('le joker'))
  input(ticketActions.setTicketQuantity(4))
  input(true)
  input(mainActions.requestSummary())
}
