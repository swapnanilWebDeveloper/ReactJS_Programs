import logo from './logo.svg';
import './App.css';
import React, {useRef} from "react";

function App() {
  const inputRef = useRef(null);
  const eleRef = useRef(null);

  const handleButtonClick = () => {
      const inputValue = inputRef.current.value;
      const elementValue = eleRef.current.innerHTML;
      alert(`Input value ${inputValue}`)
      console.log(`Input value : ${inputValue}`)
      console.log(` ${inputValue} works in ${elementValue}`)
      eleRef.current.innerHTML = "INFOSYS"
  }
  return (
    <div className="App">
       <h3>UseRef in React</h3>

       <input ref={inputRef} type="text" />
       <h4 ref={eleRef}>Tata Consultancy Services</h4>
       <button onClick={() => handleButtonClick()}>Get Input Value</button>
    </div>
  );
}

export default App;
