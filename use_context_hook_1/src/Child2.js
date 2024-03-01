import React, { useContext } from 'react'
import { MyContext } from './App'

export default function Child2() {
    const shareData = useContext(MyContext);
    console.log(shareData);
  return (
    <div>
        <h3>Child2 component</h3>
        <p>name is : {shareData.name}</p>
        <p>email is : {shareData.email}</p>
        <p>salary is : {shareData.salary}</p>
    </div>
  )
}
