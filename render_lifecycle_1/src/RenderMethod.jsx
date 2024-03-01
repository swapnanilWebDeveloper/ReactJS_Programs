import React, { Component } from 'react'

export default class RenderMethod extends Component {
  render(props) {
    const {emp_name : name, emp_email: email, emp_address : addr , emp_company : comp, 
           emp_basic: basic, emp_hra : HRA, emp_ta : TA, emp_pf : PF, emp_it : IT, emp_total: total } = this.props;
    return (
      <div>
          <h2>Render method lifecycle</h2>
          <h2>Name is : {name}</h2>
          <h2>Email is : {email}</h2>
          <h2>address is : {addr}</h2>
          <h2>company is : {comp}</h2>

          <h2>basic is : {basic}</h2>
          <h2>HRA is : {HRA}</h2>
          <h2>Travelling allowances is : {TA}</h2>
          <h2>Provident Fund is : {PF}</h2>
          <h2>income Tax is : {IT}</h2>
          <h2>Total salary is : {total}</h2>
      </div>
    )
  }
}
