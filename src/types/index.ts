export const enum ActionTypes {
  ADD_MESSAGE = 'ADD_MESSAGE',
  NEW_MESSAGE = 'NEW_MESSAGE',
  ADD_USER = 'ADD_USER',
  REMOVE_USER = 'REMOVE_USER',
  USERS = 'USERS',
  MESSAGES = 'MESSAGES'
}

export interface User {
  name: string
}

export interface State {
  messages: MessageState
  users: User[]
}

export interface MessageState {
  messages: Message[]
}

export interface Message {
  message: string
  author: string
  id: number
}
