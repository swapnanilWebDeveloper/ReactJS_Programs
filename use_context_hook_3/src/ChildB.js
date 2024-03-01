import React, {useContext} from 'react'
import { MyContext } from './App'

export default function ChildB() {
     const emp_info = useContext(MyContext);
     console.log(emp_info);
  return (
    <div>
        <h3>ChildB is executing......</h3>
        <h3>name is : {emp_info.name}</h3>
        <h3>email is : {emp_info.email}</h3>
        <h3>basic is : {emp_info.basic}</h3>
        <h3>HRA is : {emp_info.HRA}</h3>
        <h3>TA is : {emp_info.TA}</h3>
        <h3>PF is : {emp_info.PF}</h3>
        <h3>IT is : {emp_info.IT}</h3>
        <h3>net natSalary is : {emp_info.netSalary}</h3>
    </div>
  )
}
