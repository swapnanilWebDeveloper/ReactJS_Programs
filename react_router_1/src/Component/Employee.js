import React from 'react'

function Employee(props) {
  const {name , email, basic , HRA, TA, PF, IT, netSalary : net_sal} = props;
  console.log(props);
  return (
    <div>
        <h3>Employee page has been executed...</h3>
        <h3>name is : {name}</h3>
        <h3>email is : {email}</h3>
        <h3>basic salary : {basic}</h3>
        <h3>HRA is : {HRA}</h3>
        <h3>TA is : {TA}</h3>
        <h3>PF is : {PF}</h3>
        <h3>IT is : {IT}</h3>
        <h3>netSalary is : {net_sal}</h3>
    </div>
  )
}

export default Employee
