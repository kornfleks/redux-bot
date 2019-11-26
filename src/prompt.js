import prompts from 'prompts'

import * as mainTypes from './types/main'
import * as mainActions from './actions/main'

import * as movieTypes from './types/movie'
import * as movieActions from './actions/movie'

import * as ticketTypes from './types/ticket'
import * as ticketActions from './actions/ticket'

import { input as makeInput } from './lib/io'

export const startPrompt = async (store) => {
  const input = makeInput(store.dispatch)
  while (true) {
    const response = await prompts({
      type: 'select',
      name: 'action',
      message: 'Pick action',
      choices: [
        { title: mainTypes.GREETINGS, value: mainActions.greetings() },
        { title: mainTypes.REQUEST_SUMMARY, value: mainActions.requestSummary() },
        { title: movieTypes.SET_SELECTED_MOVIE, value: movieActions.setSelectedMovie() },
        { title: movieTypes.SHOW_SYNOPSIS, value: movieActions.showSynopsis() },
        { title: movieTypes.REPLY_MOVIE_SUGGESTION, value: movieActions.replyMovieSuggestion() },
        { title: ticketTypes.SET_TICKET_QUANTITY, value: ticketActions.setTicketQuantity() },
        { title: "type text", value: "TEXT_PROMPT" },
        { title: "exit", value: "EXIT" }
      ]
    });
    if (response.action === "EXIT") break;

    if (response.action === "TEXT_PROMPT") {
      const textResponse = await prompts({
        type: 'text',
        name: 'value',
        message: "value"
      });
      const rawValue = textResponse.value
      const value = parseInt(rawValue, 10) == rawValue
        ? parseInt(rawValue, 10)
        : rawValue
      input(value)
      continue;
    }

    const keys = []
    for (const key in response.action) {
      if (key !== 'type') {
        keys.push(key)
      }
    }
    const action = {
      type: response.action.type
    }

    for (const key of keys) {
      const valueResponse = await prompts({
        type: 'text',
        name: 'value',
        message: key
      });
      const rawValue = valueResponse.value
      const value = parseInt(rawValue, 10) == rawValue
        ? parseInt(rawValue, 10)
        : (rawValue || null)
      action[key] = value
    }

    input(action)
  }
}
