import React, {Component} from "react";

export default class User_1 extends Component{

    constructor(){
        super();

        this.state = {
            name : "Mayuk Mukherjee",
            email : "Mayuk@gmail.com",
            address : "Barendranagar",
            company : "TCS"
        }
    }

    personal_info(){
        this.setState({
            name : "Suryendu Sarkar",
            email : "Suryendu@gmail.com",
            address : "Thana Para",
            company : "Infosys"
        })
    }

       render(){
          return(
              <>
                <h2>Name : {this.state.name}</h2>
                <h2>email : {this.state.email}</h2>
                <h2>Address : {this.state.address}</h2>
                <h2>Company : {this.state.company}</h2>
                <button onClick={() => { this.personal_info()}}>change personal data</button>
              </>
          )
       }
}

