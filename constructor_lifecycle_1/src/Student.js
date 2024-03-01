import React, {Component} from "react";

export default class Student extends Component{
      constructor(){
        super();
        console.log("I am inside constructor method...");
        this.state = {
          name : "mayuk mukherjee",
          email : "Mayuk@gmail.com",
          address : "Barendranagar",
          physics : 99,
          chemistry : 88,
          mathematics : 97,
         // total : this.physics +this.chemistry + this.mathematics 
          } 
        }

       calc_science = () =>{
          this.setState({
            name : "Suryendu Sarkar",
            email : "SUryendu@gmail.com",
            address : "Thanapara",
            physics : 91,
            chemistry : 76,
            mathematics : 84,
          //  total : this.state.physics +this.state.chemistry + this.state.mathematics
          });
       }

       render(){
        console.log("render method");
          return(
              <>
                <h2>User is arguing with me</h2>
                <h2>Name is : {this.state.name}</h2>
                <h2>Email is : {this.state.email}</h2>
                <h2>address is : {this.state.address}</h2>
                <h2>marks in physics is : { this.state.physics}</h2>
                <h2>marks in chemistry is : {this.state.chemistry}</h2>
                <h2>marks in mathematics is : {this.state.mathematics}</h2>
                <h2>Total marks : { this.state.physics + this.state.chemistry + this.state.mathematics }</h2>

                <button onClick={() => {this.calc_science()}}>calculate total</button>
              </>
          );
       }
}

