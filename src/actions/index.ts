import { ActionTypes as types } from '../types'

export type Action =
    | { type: types.ADD_MESSAGE, message: string, author: string}


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

export const messageRecieved = (message: string, author: string) => ({
  type: types.MESSAGE_RECEIVED,
  message,
  author
})

export const populateUsersList = (users: number[]) => ({
  type: types.USERS_LIST,
  users
})
