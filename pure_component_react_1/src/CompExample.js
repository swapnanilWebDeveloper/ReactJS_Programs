import React, { PureComponent } from 'react'

export default class CompExample extends PureComponent {
  render() {
    console.log("Counter Pure component rendered....!!!")
    return (
      <div>
           <h2>React is using pure component</h2>
           {/* <h3>Counter : {this.props.count}</h3> */}
           <h3>name is : {this.props.name}</h3>
           <h3>email is : {this.props.email}</h3>
           <h3>address is : {this.props.address}</h3>
           <h3>marks in physics : {this.props.physics}</h3>
           <h3>marks in chemistry : {this.props.chemistry}</h3>
           <h3>marks in mathematics : {this.props.mathematics}</h3>
           <h3>total marks : {this.props.total}</h3>
           <button onClick={this.props.onIncrement}>Increment</button>
      </div>
    )
  }
}
