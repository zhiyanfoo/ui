import { MessageState } from '../types'
import { ActionTypes as types } from '../types'
import { createReducer } from '../utils/reducer'
import { Action } from '../actions'

const addMessage = (state: MessageState, action: Action) => {
  return {
    ...state,
    messages: state.messages.concat({
      message: action.message,
      author: action.author
    })
  }
}

export const messages = createReducer(
  {
    messages: []
  },
  {
    [types.ADD_MESSAGE]: addMessage,
    [types.MESSAGE_RECEIVED]: addMessage
  }
)
