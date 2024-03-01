import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
     setInputValue(event.target.value);
     console.log("the value is : "+inputValue)
  }
  return (
    <div className="App">
       <h3>controlled in react</h3>
       
       <input type="text" value={inputValue} onChange={handleChange}/>

       <p>Current Value : {inputValue}</p>
    </div>
  );
}

export default App;
