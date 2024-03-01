import React, { Component } from 'react'
import CompExample from './CompExample'

export default class Example extends Component {

  constructor(props){
     super(props);
     this.state = {
      count : 0,
      name : "Mayuk Mukherjee",
      email : "Mayuk@gmail.com",
      address : "Barendranagar",
      physics : 99,
      chemistry : 88,
      mathematics : 97,
      total : this.physics + this.chemistry + this.mathematics
     }
  }

  handleIncrement = () => {
      this.setState({
      name : "Suryendu Sarkar",
      email : "Suryendu@gmail.com",
      address : "Thanapara",
      physics : 84,
      chemistry : 74,
      mathematics : 93,
      total : this.state.physics + this.state.chemistry + this.state.mathematics 
      })
  }

  render() {
    console.log("Parent rendered ...!!")
    return (
      <div>
          <h3>I am learning pure component</h3>
          <CompExample 
            name={this.state.name}
            email={this.state.email}
            address={this.state.address}
            physics={this.state.physics}
            chemistry={this.state.chemistry}
            mathematics={this.state.mathematics}
            total={this.state.total}
            onIncrement={this.handleIncrement}
          />
      </div>
    )
  }
}
