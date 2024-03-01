import React, {Component} from "react";

export default class User_1 extends Component{

    constructor(){
        super();

        this.state = {
            data : "code4education",
        }
    }

    demo(){
        this.setState({
            data : "Bhaskar Gupta",
        })
    }

       render(){
          return(
              <>
                <h2>{this.state.data}</h2>
                <button onClick={() => { this.demo()}}>click here</button>
              </>
          )
       }
}

