import logo from './logo.svg';
import './App.css';
import Children from './Children';
import React,{useRef} from "react";

function App() {
  const inputRef = useRef(null);

  const updateInput = () => {
     inputRef.current.value = "1000";
     inputRef.current.style.color = "red";
     inputRef.current.style.backgroundColor = "yellow";
     inputRef.current.style.fontSize = "15px";
     inputRef.current.style.fontWeight = "bold";
     inputRef.current.focus();
  }
  return (
    <div className="App">
       <h3>Forward ref in react</h3>
       
       <Children ref={inputRef} />
       <button onClick={updateInput}>Update button</button>
    </div>
  );
}

export default App;
