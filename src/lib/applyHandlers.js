import { passiveOutput } from './io'

const applyHandlers = (...handlers) => store => {
  const handlersMap = handlers.reduce((acc, handler) => ({ ...acc, ...handler }), {})

  return next => action => {
    next(action) // call reducers, changing state(s)
    const state = store.getState() // get next state
    const handler = handlersMap[action.type]
    if (handler) {
      handler(state, action, store.dispatch)
    } else {
      passiveOutput('Désolé, je ne comprends pas...')
    }
  }
}

export default applyHandlers
