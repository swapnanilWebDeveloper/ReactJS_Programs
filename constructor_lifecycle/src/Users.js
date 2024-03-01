import React, {Component} from "react";

export default class Users extends Component{
      constructor(props){
        super();
        console.log("I am inside constructor method...");
        this.state = {
          data : "mayuk mukherjee",
        }
      }
       render(){
        console.log("render method");
          return(
              <>
                <h2>User is arguing with me</h2>
                <h2>Name is : {this.state.data}</h2>
                <h2>Email is : {this.props.email}</h2>
                <h2>address is : {this.props.addr}</h2>
              </>
          )
       }
}

