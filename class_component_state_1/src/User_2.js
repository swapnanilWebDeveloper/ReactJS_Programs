 import React, {Component} from "react";

export default class User_2 extends Component{

    constructor(){
        super();

        this.state = {
            count : 5
        }
    }

    Increment(){
        this.setState({
            count : this.state.count + 1
        })
    }

       render(){
          return(
              <>
                <h3>Number : {this.state.count}</h3>
                <button onClick={() => { this.Increment()}}>click to increase</button>
              </>
          )
       }
}




