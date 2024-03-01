import React,{ useContext} from 'react'
import { MyContext } from "./App";

export default function Child2() {
    const student_info = useContext(MyContext);
  return (
    <div>
        <h3>Child2 is executing.....</h3>
         
        <p>name is : {student_info.name}</p>
        <p>email is : {student_info.email}</p>
        <p>address is : {student_info.address}</p>
        <p>physics marks is : {student_info.phy}</p>
        <p>chemistry marks is : {student_info.chem}</p>
        <p>mathematics marks is : {student_info.math}</p>
        <p>Total marks is : {student_info.total}</p>
    </div>
  )
}
