import * as React from 'react'
import username from '../utils/name'

const Sidebar = ({ users }: { users: any }) => {
  return (
    <aside id="sidebar" className="sidebar">
      <p>You are: {username}</p>
      <p>{users.length === 0 ? 'No one else is online :(' : 'Users online:'}</p>
      <ul>
        {users.map((user: string) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
