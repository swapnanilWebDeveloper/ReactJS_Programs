import React, { Component } from 'react'
import Unmount from './Unmount';

export default class User extends Component {
    constructor(){
        super();
        this.state = {
            show : true,
        }
    }
  render() {
    console.log("clicked ....",this.state.show);
    return (
      <div>
           <h2>lifecycle willUnmount method</h2>
           {this.state.show ? <Unmount /> : <h2>Removed</h2>}
           <button onClick={() => this.setState({show : !this.state.show})}>Removed component</button>
      </div>
    )
  }
}
