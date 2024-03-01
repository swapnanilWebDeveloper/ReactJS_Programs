import React, {Component} from "react";
import UserList from "./UserList";

export default class Information extends Component{
  constructor(){
    super();
    this.state = {
       name : "Ankit Gupta",
       email : "Ankit@gmail.com",
    }
  } 

  change_info(){
    this.setState({
        name : "programming4education",
        email : "programming@gmail.com"
     })
}
       render(){
          return(
              <>
                <h2>customer is looking for a discount</h2>
                {/* <UserList name = "Bhaskar Gupta" email = "Bhaskar@gmail.com" /> */}
                <UserList name = {this.state.name} email = {this.state.email} />
                {/* <button onClick = {() => this.setState({ name : "code4education" , email : "code4@gamil.com"})}>
                   Update props</button> */ }
                   <button onClick={() => this.change_info()}>update props</button>
              </>
          )
       }
}

