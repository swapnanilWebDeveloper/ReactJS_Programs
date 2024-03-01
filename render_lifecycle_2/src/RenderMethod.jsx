import React, { Component } from 'react'

export default class RenderMethod extends Component {
  render(props) {
      const {Name,Email,Address,Physics : phy ,Chemistry : chem ,Mathematics : math , 
              Science_total : total} = this.props;
      
    return (
      <div>
          <h3>name is : {Name}</h3> 
          <h3>Email is : {Email}</h3>
          <h3>Address is : {Address}</h3>
          <h3>marks in Physics is : {phy}</h3>
          <h3>marks in chemistry is : {chem}</h3>
          <h3>marks in mathematics is : {math}</h3>
          <h3>total marks is : {total}</h3>       
      </div>
    )
  }
}
