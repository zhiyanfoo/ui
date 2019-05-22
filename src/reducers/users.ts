import { ActionTypes as types } from '../types'
import { User } from '../types'

const users = (state: User[] = [], action: any) => {
  switch (action.type) {
    case types.ADD_USER:
      return state.concat([action.name])
    case types.REMOVE_USER:
      return state.filter(name => name !== action.name)
    case types.USERS_LIST:
      return action.users
    default:
      return state
  }
}

export default users
