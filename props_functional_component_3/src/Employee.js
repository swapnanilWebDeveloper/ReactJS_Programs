import React from 'react'

export default function Employee(props) {

  return (
    <div>
        <h1>props in functional component</h1>  
        <h3>name of the employee : {props.empName}</h3>
        <h3>email of the employee : {props.empEmail}</h3>
        <h3>address of the employee : {props.empAdd}</h3>
        <h3>company of the employee : {props.empCompany}</h3>
        <h2>Basic salary : {props.salaryBasic}</h2>
        <h2>House Rent Allowance : {props.salaryHra}</h2>
        <h2>Travelling Allowance : {props.salryTa}</h2>
        <h2>Provident fund : {props.salaryPf}</h2>
        <h2>Income Tax : {props.salaryIt}</h2>
        <h2>total salary : {props.netSalary}</h2>
    </div>
  )
}
