import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

function Example_1() {
   const [inputValue,setInputValue] = useState("");
   const [email,setEmail] = useState("");

   const [inputValueShow, setInputValueHide] = useState(false);

 /* const handleChange = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
        setEmail(event.target.value);
      
        setInputValueHide(false);
  }  */

  const submit_value = () => {
    setInputValueHide(true);
  }

  return (
    <div className="Example_1">
        <h1>input value box</h1>
        {/* <h1>{inputValue}</h1> */}
        <h1>name : {inputValueShow ? inputValue : ''}</h1>
        <h1>email : {inputValueShow ? email : ''}</h1>
        <input type="text" onChange={(e1) => { setInputValue(e1.target.value);}}></input>
        <input type="text" onChange={ (e2) => {setEmail(e2.target.value)}}></input>


        <button onClick={() =>{ submit_value()}}>Submit</button>
    </div>
  );
}

export default Example_1;
