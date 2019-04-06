import * as React from 'react'
import './App.css'

import Chat from './containers/chat'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Chat} />
      </Router>
    )
  }
}

export default App
