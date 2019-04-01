import { addMessage } from '../actions'
import { ActionTypes as types } from '../types'

describe('adding a message', () => {
  it('should create an action to add a message with id 0', () => {
    const message = 'Something'
    const author = 'Me'
    const action = {
      type: types.ADD_MESSAGE,
      message,
      author
    }
    expect(addMessage(message, author)).toEqual(action)
  })
})
