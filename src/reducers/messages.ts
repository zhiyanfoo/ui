import { MessageState } from '../types'
import { ActionTypes as types } from '../types'
import { createReducer } from '../utils/reducer'
import { Action } from '../actions'

export const messages = createReducer(
  {
    messages: []
  },
  {
    [types.ADD_MESSAGE]: (state: MessageState, action: Action) => {
        console.log('in reducer')
        console.log(state)
        return {
          ...state,
          messages: state.messages.concat({message: action.message, author: action.author}),
        }
    }

  }
)
