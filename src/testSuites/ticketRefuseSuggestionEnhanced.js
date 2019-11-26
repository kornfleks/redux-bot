import * as mainActions from '../actions/main'
import * as movieActions from '../actions/movie'
import * as ticketActions from '../actions/ticket'

export default input => {
  console.log('[TEST_SUITE]: refuse suggestion')
  input(mainActions.greetings()) // default
  input(movieActions.showSynopsis('le joker'))
  input(ticketActions.setTicketQuantity(4))
  input(movieActions.replyMovieSuggestion(false, 'la reine des neiges'))
  input(mainActions.requestSummary())
  input(`*s'étouffe tout en prononçant sa phrase*`)
}
