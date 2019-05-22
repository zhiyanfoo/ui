import { connect } from 'react-redux'
import SidebarComponent from '../components/sidebar'
import { State } from '../types'

const mapStateToProps = (state: State) => {
  return { users: state.users }
}

export const Sidebar = connect(
  mapStateToProps,
  {}
)(SidebarComponent)
