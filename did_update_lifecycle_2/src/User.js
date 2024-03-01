import React, { Component } from 'react'

export default class User extends Component {
    constructor(){
        super();
        this.state = {
            name : "Mayuk Mukherjee",
            email : "Mayuk@gmail.com",
            address : "Barendranagar",
            physics : 99,
            chemistry : 88,
            mathematics : 97,
        }
        console.log("Constructor called .....!!")
    }

    componentDidUpdate(prevProps,prevState){
        if((this.state.name, prevState.name)){
              console.log("ComponentDidUpdate lifecycle...."
                   ,prevState.name,this.state.name+", email "+
                   prevState.email, this.state.email+", address "+
                   prevState.address,this.state.address
              ) 
        }  
    }

    change_data(){
        this.setState({
            name : "Suryendu Sarkar",
            email : "Suryendu@gmail.com",
            address : "Thanapara",
            physics : 91,
            chemistry : 76,
            mathematics : 84
        })
    }
  render() {
    console.log("Render called ....!!!");
    return (
      <div>
           <h3>Lifecycle Component Update method</h3>
           <h4>Name is : {this.state.name}</h4>
           <h4>email is : {this.state.email}</h4>
           <h4>address is : {this.state.address}</h4>
           <h4>physics is : {this.state.physics}</h4>
           <h4>chemistry is : {this.state.chemistry}</h4>
           <h4>mathematics is : {this.state.mathematics}</h4>
           <button onClick={() => this.change_data()}>Update Data</button>
      </div>
    )
  }
}
