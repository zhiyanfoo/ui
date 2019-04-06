// import { Sidebar } from "./containers/Sidebar"
import { MessagesList } from './messages-list'
import { AddMessage } from './add-message'
import * as React from 'react'

class Chat extends React.Component {
  render() {
    return (
      <div id="container">
        <aside id="sidebar">Users</aside>
        <section id="main">
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    )
  }
}

export default Chat
