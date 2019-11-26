import { passiveOutput } from './io'

const applyHandlers = (...handlers) => store => {
  const handlersMap = handlers.reduce((acc, handler) => ({ ...acc, ...handler }), {})
  const callHandler = action => type => {
    const state = store.getState()
    const handler = handlersMap[type]
    if (handler) {
      handler(state, action, callHandler(action))
    } else {
      passiveOutput('Désolé, je ne comprends pas...')
    }
  }
  return next => action => {
    next(action) // call reducers, changing state(s)
    callHandler(action)(action.type)
  }
}

export default applyHandlers
