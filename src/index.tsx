import './index.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './App'
import { Provider } from 'react-redux'
import chat from './reducers'
import { createStore, applyMiddleware } from 'redux'
import registerServiceWorker from './registerServiceWorker'

import createSagaMiddleware from 'redux-saga'
import setupSocket from './sockets'
import username from './utils/name'
import handleNewMessage from './saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(chat, applyMiddleware(sagaMiddleware))

const socket = setupSocket(store.dispatch, username)

sagaMiddleware.run(handleNewMessage, { socket, username })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
