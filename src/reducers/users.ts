import { ActionTypes as types } from '../types'
import { User } from '../types'

const users = (state: User[] = [], action: any) => {
  switch (action.type) {
    case types.ADD_USER:
      return state.concat([{ name: action.name, id: action.id }])
    case types.USERS_LIST:
      return action.users
    default:
      return state
  }
}

export default users
