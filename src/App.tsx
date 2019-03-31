import * as React from 'react';
import './App.css';

// import { Sidebar } from "./containers/Sidebar"
import { MessagesList } from "./containers/messages-list"
import { AddMessage } from "./containers/add-message"

class App extends React.Component {
  render() {
    return (
      <div id="container">
        <aside id="sidebar">Users</aside>
        <section id="main">
          <MessagesList/>
          <AddMessage/>
        </section>
      </div>
    )
  }
}

export default App;
