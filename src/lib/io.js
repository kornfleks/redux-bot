const INSTANCE = {
  actionCreator: null
}

export const output = (text, actionCreator) => {
  console.log(`[BOT]\n\t${text.trim()}`)
  INSTANCE.actionCreator = actionCreator
}

export const passiveOutput = (text) => {
  console.log(`[BOT]\n\t${text.trim()}`)
}


export const input = dispatch => (userInput) => {
  if (typeof userInput === 'object' && !!userInput.type) {
    console.log(`[USER]\n\t${JSON.stringify(userInput)}`)
    dispatch(userInput)
  } else if (INSTANCE.actionCreator) {
    const action = INSTANCE.actionCreator(userInput)
    console.log(`[USER]\n\t${JSON.stringify(action)}`)
    INSTANCE.actionCreator = null
    dispatch(action)
  } else {
    console.log(`[USER]\n\t${userInput}`)
    dispatch({ type: 'UNKOWN', content: userInput })
  }
}
