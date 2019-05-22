import { MessageState } from '../types'
import { ActionTypes as types } from '../types'
import { createReducer } from '../utils/reducer'
// import { AddMessage, MessageList} from '../actions'

const addMessage = (state: MessageState, action: any) => {
  return {
    ...state,
    messages: state.messages.concat({
      message: action.message,
      author: action.author,
      id: state.messages.length
    })
  }
}

const newMessage = (state: MessageState, action: any) => {
  return {
    ...state,
    messages: state.messages.concat({
      message: action.message,
      author: action.author,
      id: action.id
    })
  }
}

const populateMessageList = (state: MessageState, action: any) => {
  return {
    ...state,
    messages: action.messages
  }
}

export const messages = createReducer(
  {
    messages: []
  },
  {
    [types.ADD_MESSAGE]: addMessage,
    [types.NEW_MESSAGE]: newMessage,
    [types.MESSAGES]: populateMessageList
  }
)
