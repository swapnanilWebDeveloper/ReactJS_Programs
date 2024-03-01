import React, { Component } from 'react'

export default class CounterPureComponent extends Component {
  render() {
    console.log("Counter pure component rendered....!!")
    return (
      <div>
           <h3>Counter : {this.props.count}</h3>
           <button onClick={this.props.onIncrement}>Increment</button>  
      </div>
    )
  }
}
