import { ActionTypes as types } from '../types'
import { addUser, messageRecieved, populateUsersList } from '../actions'
import { Dispatch } from 'redux'

const setupSocket = (dispatch: Dispatch, username: string) => {
  const socket = new WebSocket('ws://localhost:8989')

  socket.onopen = () => {
    socket.send(
      JSON.stringify({
        type: types.ADD_USER,
        name: username
      })
    )
  }

  socket.onmessage = event => {
    const data = JSON.parse(event.data)
    console.log(data)

    switch (data.type) {
      case types.ADD_MESSAGE:
        dispatch(messageRecieved(data.message, data.author))
        break
      case types.ADD_USER:
        dispatch(addUser(data.name))
        break
      case types.USERS_LIST:
        dispatch(populateUsersList(data.users))
        break
      default:
        break
    }
  }

  return socket
}

export default setupSocket
