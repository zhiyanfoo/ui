import { connect } from 'react-redux'
import MessagesListComponent from '../components/messages-list'
import { State } from '../types'

const mapStateToProps = (state: State) => {
  console.log('state')
  console.log(state)
  console.log(state.messages)
  return state.messages
}

export const MessagesList = connect(
  mapStateToProps,
  {}
)(MessagesListComponent)
