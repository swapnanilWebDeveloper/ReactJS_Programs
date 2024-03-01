import React, { Component, createRef } from 'react'

export default class RefExample extends Component {
    constructor(){
        super();
        this.nameInputRef = createRef();
        this.emailInputRef = createRef();
    }

    componentDidMount(){
        //name input box styling ....
        this.nameInputRef.current.value = "Mayuk Mukherjee";
        this.nameInputRef.current.style.backgroundColor = "red";
        this.nameInputRef.current.style.color = "yellow";
        this.nameInputRef.current.style.fontSize = "20px";

        // email input box styling....
        this.emailInputRef.current.value = "Mayuk@gmail.com";
        this.emailInputRef.current.style.backgroundColor = "aqua";
        this.emailInputRef.current.style.color = "brown";
        this.emailInputRef.current.style.fontSize = "20px";
        this.emailInputRef.current.style.fontWeight = "bold";
    }

    nameChange = () => {
        this.nameInputRef.current.focus();
        this.nameInputRef.current.value = "Suryendu Sarkar";
        this.nameInputRef.current.style.backgroundColor = "yellow";
        this.nameInputRef.current.style.color = "green";
        this.nameInputRef.current.style.fontSize = "15px";
    }

    emailChange = () => {
          // email input box styling....
          this.emailInputRef.current.focus();
        this.emailInputRef.current.value = "Suryendu@gmail.com";
        this.emailInputRef.current.style.backgroundColor = "green";
        this.emailInputRef.current.style.color = "red";
        this.emailInputRef.current.style.fontSize = "12px";
        this.emailInputRef.current.style.fontWeight = "bold";
    }

  render() {
    return (
      <div>
            <h4>Name : <input type="text"
               ref={this.nameInputRef}
            /></h4>
            <button onClick={() => this.nameChange()}>change name</button>

            <h4>Email : <input type="text"
               ref={this.emailInputRef}
            /></h4>
            <button onClick={() => this.emailChange()}>change email</button>
      </div>
    )
  }
}
