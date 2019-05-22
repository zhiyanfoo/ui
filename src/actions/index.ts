import { ActionTypes as types } from '../types'

export const addMessage = (message: string, author: string) => {
  return {
    type: types.ADD_MESSAGE,
    message,
    author
  }
}

export const addUser = (name: string) => ({
  type: types.ADD_USER,
  name
})

export const removeUser = (name: string) => ({
  type: types.REMOVE_USER,
  name
})

export const messageRecieved = (
  message: string,
  author: string,
  id: number
) => ({
  type: types.NEW_MESSAGE,
  message,
  author,
  id
})

export const populateUsersList = (users: number[]) => ({
  type: types.USERS,
  users
})

export const populateMessagesList = (messages: any) => ({
  type: types.MESSAGES,
  messages
})
