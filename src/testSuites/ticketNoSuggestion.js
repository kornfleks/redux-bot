import * as mainActions from '../actions/main'
import * as movieActions from '../actions/movie'
import * as ticketActions from '../actions/ticket'

export default input => {
  console.log('[TEST_SUITE]: ticket no suggestion')
  input(mainActions.greetings()) // default
  input(ticketActions.setTicketQuantity(4))
  input('Le joker')
  input(mainActions.requestSummary())
}
