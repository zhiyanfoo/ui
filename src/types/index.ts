export const enum ActionTypes {
  ADD_MESSAGE = 'ADD_MESSAGE',
  NEW_MESSAGE = 'NEW_MESSAGE',
  ADD_USER = 'ADD_USER',
  REMOVE_USER = 'REMOVE_USER',
  USERS_LIST = 'USERS_LIST',
  MESSAGE_LIST = 'MESSAGE_LIST'
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
}
