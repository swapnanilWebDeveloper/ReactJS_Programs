import React, { Component } from 'react'

export default class User extends Component {
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }

    shouldComponentUpdate(nextProps,nextState){
       // console.log("Should component update...",this.state.count,nextProps,nextState);
       console.log("Should component update...",this.state.count,nextState.count);

       if(nextState.count > 5){
             return true;
       }
        return false;
    }

  render() {
    return (
      <div>
           <h3>Lifecycle Should component update method....</h3>
           <h3>Count : {this.state.count}</h3>
           <button onClick={() => this.setState({count : this.state.count + 1})}>Update state</button>
      </div>
    )
  }
}
