import * as mainActions from '../actions/main'
import * as movieActions from '../actions/movie'

const defaultTestSuite = input => {
  console.log('[TEST_SUITE]: default')
  input(mainActions.greetings())
  input(movieActions.showSynopsis())
  input('la reine des neiges')
  input(movieActions.showSynopsis('le joker'))
  input(mainActions.requestSummary())
}

export default defaultTestSuite
