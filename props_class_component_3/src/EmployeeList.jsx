import React, {Component} from "react";

export default class EmployeeList extends Component{
   render(){
         const {empName, empEmail, empAddress, empCompany, 
                 salary_Basic, salary_HRA, salary_TA, salary_PF, salary_IT, net_salary} = this.props;
          return(
              <>
                <h2>Everyone is using server engine</h2>
               
               {/* <h2>Name is : {this.props.name}</h2>
                   <h2>Email is : {this.props.email}</h2> */}

                <h3>Name is : {empName}</h3>
                <h3>Email is : {empEmail}</h3>
                <h3>address is : {empAddress}</h3>
                <h3>Company is : {empCompany}</h3>
                <h3>salary_Basic is : {salary_Basic}</h3>
                <h3>salary_HRA is : {salary_HRA}</h3>
                <h3>salary_TA is : {salary_TA}</h3>
                <h3>salary_PF is : {salary_PF}</h3>
                <h3>salary_IT is : {salary_IT}</h3>
                <h3>net salary is : {net_salary}</h3>
              </>
          )
       }
}

