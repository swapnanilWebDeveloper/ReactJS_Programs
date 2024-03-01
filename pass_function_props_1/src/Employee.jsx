import React from 'react'

export default function Employee(props) {
  return (
    <div>
        <h1>Users Component</h1>
        <h3>name : {props.emp_info.name}</h3>
        <h3>email : {props.emp_info.email}</h3>
        <h3>address : {props.emp_info.address}</h3>
        <h3>company : {props.emp_info.company}</h3>
        <h3>basic : {props.emp_info.basic}</h3>
        <h3>house rent allowance : {props.emp_info.hra}</h3>
        <h3>travelling allowance : {props.emp_info.ta}</h3>
        <h3>provident fund : {props.emp_info.pf}</h3>
        <h3>Income Tax : {props.emp_info.it}</h3>
        <h3>net salary : {props.net_salary}</h3>
        <button onClick={props.salary_employee}>calculate net salary</button>
    </div>
  )
}
