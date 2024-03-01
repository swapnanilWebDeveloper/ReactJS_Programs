import React, {Component} from "react";
import EmployeeList from "./EmployeeList";

export default class EmployeeData extends Component{
  constructor(){
    super();
    this.state = {
       name : "Ankit Gupta",
       email : "Ankit@gmail.com",
       address : "Delhi",
       company : "Apple",
       basic : 85000,
       hra : 9500,
       ta : 7500,
       pf : 4500,
       it : 3500
    }
  } 

  change_info(){
    this.setState({
        name : "Suryendu Sarkar",
        email : "Suryendu@gmail.com",
        address : "Pune",
        company : "Microsoft",
        basic : 55000,
        hra : 4500,
        ta : 3500,
        pf : 6500,
        it : 8500
     })
}
       render(){
          return(
              <>
                <h2>customer is looking for a discount</h2>
                <EmployeeList
                 empName = {this.state.name}
                 empEmail = {this.state.email}
                 empAddress = {this.state.address}
                 empCompany = {this.state.company}
                 salary_Basic = {this.state.basic}
                  salary_HRA = {this.state.hra}
                 salary_TA = {this.state.ta}
                 salary_PF = {this.state.pf}
                 salary_IT = {this.state.it}
                 net_salary = {this.state.basic + this.state.hra + this.state.ta - this.state.pf - this.state.it} 
                 />
                   <button onClick={() => this.change_info()}>update props</button>
              </>
          )
       }
}

