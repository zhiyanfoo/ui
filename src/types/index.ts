export const enum ActionTypes {
  ADD_MESSAGE = 'ADD_MESSAGE',
  MESSAGE_RECEIVED = 'MESSAGE_RECEIVED',
  ADD_USER = 'ADD_USER',
  USERS_LIST = 'USERS_LIST'
}

export interface User {
  name: string
  id: number
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
