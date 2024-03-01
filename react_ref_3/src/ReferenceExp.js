import React, { Component,createRef } from 'react'

export default class ReferenceExp extends Component {
      constructor(){
        super();
        this.element1ref = createRef();
        this.element2ref = createRef();
      }

      componentDidMount(){
        //element 1 styling
        this.element1ref.current.style.width = "200px";
        this.element1ref.current.style.height = "30px";
        this.element1ref.current.style.backgroundColor = "red";
        this.element1ref.current.style.color = "Yellow";
        this.element1ref.current.style.marginLeft = "220px";
        this.element1ref.current.style.border = "8px solid green";
        this.element1ref.current.style.borderRadius = "20px";

        //element 2 styling 
        this.element2ref.current.style.width = "300px";
        this.element2ref.current.style.height = "70px";
        this.element2ref.current.style.backgroundColor = "green";
        this.element2ref.current.style.color = "red";
        this.element2ref.current.style.marginLeft = "170px"; 
        this.element2ref.current.style.border = "8px solid blue";
        this.element2ref.current.style.borderRadius = "12px";
        this.element2ref.current.style.paddingTop = "10px";      
      }

      changeElement1 = () => {
        this.element1ref.current.style.width = "300px";
        this.element1ref.current.style.height = "70px";
        this.element1ref.current.style.backgroundColor = "yellow";
        this.element1ref.current.style.color = "red";
        this.element1ref.current.style.marginLeft = "160px";
        this.element1ref.current.style.paddingTop = "20px";
        this.element1ref.current.style.border = "8px solid orange";
      }

      changeElement2 = () => {
        this.element2ref.current.style.width = "180px";
        this.element2ref.current.style.height = "40px";
        this.element2ref.current.style.backgroundColor = "blue";
        this.element2ref.current.style.color = "orange";
        this.element2ref.current.style.marginLeft = "200px";
        this.element2ref.current.style.paddingTop = "5px";
        this.element2ref.current.style.border = "8px solid red";
      }

  render() {
    return (
      <div>
           <h3 ref={this.element1ref}> element 1 </h3>
           <button onClick={() => this.changeElement1()}>change element 1</button>

           <h3 ref={this.element2ref}> element 2 </h3>
           <button onClick={() => this.changeElement2()}>change element 2</button>
      </div>
    )
  }
}
