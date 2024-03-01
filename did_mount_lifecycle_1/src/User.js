import React, { Component } from 'react'

export default class User extends Component {
    constructor(){
        super();
        console.log("constructor is called...")
        this.state = {
            count : 0,
        }
    }
    incrementCount = () => {
        this.setState((prevState) => ({
            count : prevState.count + 1,
        }))
    }
    componentDidMount(){
        console.log("Component did mount called....")
    }
  render() {
    console.log("Render !!")
    return (
      <div>
          <h2>Count : {this.state.count}</h2>
          <button onClick={() => this.incrementCount()}>Increment</button>
      </div>
    )
  }
}
