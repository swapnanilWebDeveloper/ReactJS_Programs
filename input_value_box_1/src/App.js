import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

function App() {
   const [inputValue,setInputValue] = useState("");
   const [inputValueShow, setInputValueHide] = useState(false);

  const handleChange = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
        /* remove */
        setInputValueHide(false);
  }

  return (
    <div className="App">
        <h1>input value box</h1>
        {/* <h1>{inputValue}</h1> */}
        <h1>{inputValueShow ? inputValue : ''}</h1>
        <input type="text" onChange={handleChange}></input>

        <button onClick={() =>{ setInputValueHide(true)}}>Submit</button>
    </div>
  );
}

export default App;
