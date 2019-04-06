import * as React from 'react'

const Sidebar = ({ users }: { users: any }) => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
