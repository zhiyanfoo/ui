import { connect } from 'react-redux'
import AddMessageComponent from '../components/add-message'
import { addMessage } from '../actions'

const mapDispatchToProps = {
  addMessage
}

export const AddMessage = connect(
  state => ({}),
  mapDispatchToProps
)(AddMessageComponent)
