import React from 'react'
import { Link } from 'react-router-dom'

const userData = {
      users: [
        {id : 1, name : "user 1"},
        {id : 2, name : "user 2"},
        {id : 3, name : "user 3"},
        {id : 4, name : "user 4"}
      ],
}

function UserList() {
  return (
    <div>
        <h3>UseList page is executing...</h3>
        <ul>
            {
                 userData.users.map((user) => (
                     <li key={user.id}>
                         <Link to={`/user/${user.id}`}>{user.name}</Link> 
                     </li>
                 ))
            }
        </ul>
        
    </div>
  )
}

export default UserList
