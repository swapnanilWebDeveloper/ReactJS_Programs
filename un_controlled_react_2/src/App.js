import logo from './logo.svg';
import './App.css';
import React,{useRef} from "react";

function App() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const addressRef = useRef(null);
  const companyRef = useRef(null);

  const data_publish = (e) => {
    e.preventDefault();
     console.log("name is : "+nameRef.current.value);
     console.log("email is : "+emailRef.current.value);
     console.log("address is : "+addressRef.current.value);
     console.log("company is : "+companyRef.current.value);
     
     const experience = document.getElementById("exp").value;
     console.log("experience is : "+experience);
  }

  return (
    <div className="App">
       <h3>uncontrolled components in react</h3>

       <form onSubmit={data_publish}>

       <h3>Name is : <input type="text" ref={nameRef} /></h3>

       <h3>email is : <input type="text" ref={emailRef} /></h3>

       <h3>address is : <input type="text" ref={addressRef} /></h3>

       <h3>company is : <input type="text" ref={companyRef} /></h3>

       <h3>Experience is : <input type="text" id="exp" /></h3>

       <button >click to publish</button>
       </form>

    </div>
  );
}

export default App;
