import React, {Component} from "react";

export default class UserList extends Component{
   render(){
         const {name, email} = this.props;
          return(
              <>
                <h2>Everyone is using server engine</h2>
               
               {/* <h2>Name is : {this.props.name}</h2>
                   <h2>Email is : {this.props.email}</h2> */}

                <h3>Name is : {name}</h3>
                <h3>Email is : {email}</h3>
              </>
          )
       }
}

