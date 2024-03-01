import React, { Component } from 'react'
import CompExample from './CompExample'

export default class Example extends Component {

  constructor(props){
     super(props);
     this.state = {
      count : 0,
     }
  }

  handleIncrement = () => {
      this.setState({
       //   count : this.state.count + 1
      })
  }

  render() {
    console.log("Parent rendered ...!!")
    return (
      <div>
          <h3>I am learning pure component</h3>
          <CompExample 
            count={this.state.count}
            onIncrement={this.handleIncrement}
          />
      </div>
    )
  }
}
