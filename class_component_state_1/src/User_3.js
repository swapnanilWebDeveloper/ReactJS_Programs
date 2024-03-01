import React, {Component} from "react";

export default class User_3 extends Component{

    constructor(){
        super();

        this.state = {
           basic : 75000,
           HRA : 7500,
           TA : 6500,
           IT : 4500,
           PF : 3500,
           net_sal : this.basic + this.HRA + this.TA - this.IT - this.PF
        }
    }

    salary_info(){
        this.setState({
           basic : 45000,
           HRA : 5500,
           TA : 3500,
           IT : 2500,
           PF : 4500,
           net_sal : this.state.basic + this.state.HRA + this.state.TA - this.state.IT - this.state.PF
        })
    }

       render(){
          return(
              <>
                <h2>Basic Salary : {this.state.basic}</h2>
                <h2>Houser Rent Allowance : {this.state.HRA}</h2>
                <h2>Travelling Allowance : {this.state.TA}</h2>
                <h2>Income Tax : {this.state.IT}</h2>
                <h2>Provident Fund : {this.state.PF}</h2>
                <h2>Net salary is : {this.state.net_sal}</h2>
                <button onClick={() => { this.salary_info()}}>change salary</button>
              </>
          )
       }
}