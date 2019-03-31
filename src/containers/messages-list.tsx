import { connect } from 'react-redux'
import MessagesListComponent from '../components/messages-list'
import { State } from '../types'

const mapStateToProps = (state: State) => {
  return state.messages
}

export const MessagesList = connect(
  mapStateToProps,
  {}
)(MessagesListComponent)
