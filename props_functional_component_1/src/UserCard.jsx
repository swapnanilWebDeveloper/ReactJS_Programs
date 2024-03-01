import React from 'react'

export default function UserCard(props) {

  // const {name, age, email} = props;  

  return (
    <div>
        <h1>props in functional component</h1>
        <h1>Hello : {props.myName}</h1>
        <h1>Email address is : {props.myEmail}</h1>

       {/* <h2>Name : {name}</h2>
        <h2>Age : {age}</h2>
        <h2>Email : {email}</h2>  */}
    </div>
  )
}
