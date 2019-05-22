import { Sidebar } from './sidebar'
import { MessagesList } from './messages-list'
import { AddMessage } from './add-message'
import * as React from 'react'

class Chat extends React.Component {
  render() {
    return (
      <div id="container">
        <Sidebar />
        <MessagesList />
        <AddMessage />
      </div>
    )
  }
}

export default Chat
