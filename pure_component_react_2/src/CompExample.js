import React, { PureComponent } from 'react'

export default class CompExample extends PureComponent {
  render() {
    console.log("Counter Pure component rendered....!!!")
    return (
      <div>
           <h2>React is using pure component</h2>
           <h3>Counter : {this.props.count}</h3>
           <button onClick={this.props.onIncrement}>Increment</button>
      </div>
    )
  }
}
