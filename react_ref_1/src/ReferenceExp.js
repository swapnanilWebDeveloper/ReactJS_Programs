import React, { Component,createRef } from 'react'

export default class ReferenceExp extends Component {
    constructor(){
        super();
        this.myInputRef = createRef();
    }

    componentDidMount(){
        this.myInputRef.current.value = "Bhaskar Gupta";
        this.myInputRef.current.style.backgroundColor = "green";
        this.myInputRef.current.style.color = "white";
    }

    handleClick = () => {
        this.myInputRef.current.focus();
    }
  render() {
    console.log(this.myInputRef);
    return (
      <div>
            <input type="text"
                ref={this.myInputRef} 
            />
            <button onClick={() => this.handleClick()}>Focus Input</button>
      </div>
    )
  }
}
