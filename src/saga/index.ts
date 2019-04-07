import { takeEvery } from 'redux-saga/effects'
import { ActionTypes as types } from '../types'

function* handleNewMessage(params: { socket: WebSocket; username: string }) {
  yield takeEvery(types.ADD_MESSAGE, (action: any) => {
    action.author = params.username
    params.socket.send(JSON.stringify(action))
  })
}

export default handleNewMessage
