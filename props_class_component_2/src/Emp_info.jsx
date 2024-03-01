import React, {Component} from "react";

export default class Emp_info extends Component{
         render(){
             const {name} = this.props;
             return(
                <>
                  <h2>class component is using props</h2>
                  <h3>name is : {name}</h3>
                </>
             )
         }
}