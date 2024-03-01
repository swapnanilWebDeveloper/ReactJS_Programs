import React, {Component} from "react";

export default class Employee extends Component{
      constructor(props){
        super();
        console.log("I am inside constructor method...");
            
        }

       render(){
        console.log("render method");
          return(
              <>
                <h2>User is arguing with me</h2>
                <h2>Name is : {this.props.emp_name}</h2>
                <h2>Email is : {this.props.emp_email}</h2>
                <h2>address is : {this.props.emp_address}</h2>
                <h2>basicis : { this.props.emp_basic}</h2>
                <h2>HRA is : {this.props.emp_hra}</h2>
                <h2>TA is : {this.props.emp_ta}</h2>
                <h2>Pf is: { this.props.emp_pf }</h2>
                <h2>TOtal salary is : {this.props.emp_total}</h2>
              </>
          );
       }
}

