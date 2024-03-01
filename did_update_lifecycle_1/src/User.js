import React, { Component } from 'react'

export default class User extends Component {
    constructor(){
        super();
        this.state = {
            name : "code4education",
            count : 0
        }
        console.log("constructor called !!");
    }

    change_state(){
          this.setState({
                name : "Bhaskar Gupta",
                count : this.state.count + 1
          })
    } 

    componentDidUpdate(prevProps,prevState){
       //  console.log(this.state.count, prevState.count);
         if ((this.state.count, prevState.count)){
            console.log("componentDidUpdate lifecycle...",
              prevState.count,
              this.state.count);
         }
    }

  render() {
       console.log("render called ....!!!");
    return (
      <div>
           <h3>Life cycle component Did Update method</h3>
           <h3>name : {this.state.name}</h3>
           <h3>Count : {this.state.count}</h3>
           <button onClick={() => this.change_state()}>Update state</button>
      </div>
    )
  }
}
