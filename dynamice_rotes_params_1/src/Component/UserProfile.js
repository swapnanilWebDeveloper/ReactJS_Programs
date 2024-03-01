import React from 'react'
import { useParams } from 'react-router-dom'

const userData = {
      users: [
        {id : 1, name : "Mayuk Mukherjee", email : "Mayuk@gmail.com", address : "Barendranagar"},
        {id : 2, name : "Suryendu Sarkar", email : "Suryendu@gmail.com", address : "Thanapara"},
        {id : 3, name : "Aninda Mukherjee", email : "Aninda@gmail.com", address : "Chatterjee para"},
        {id : 4, name : "Sanlap Gadai", email : "Sanlap@gmail.com", address : "Biswas para"}
      ],
};

function UserProfile() {
     const { userId } = useParams();
     console.log(userId);
     const user = userData.users.find((user) => user.id === parseInt(userId));
     console.log(user);
  return (
    <div>
        <h3>UseList page is executing...</h3> 
        {user?(
            <div>
                <h3>name is : {user.name}</h3>
                <h3>email is : {user.email}</h3>
                <h3>address is : {user.address}</h3>
                <h3>ID : {user.id}</h3>
            </div>
        ) : (
            <p>User not found !!!</p>
        ) }
    </div>
  )
}

export default UserProfile
