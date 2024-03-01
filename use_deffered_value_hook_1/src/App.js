import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

function App() {
  
  const [input, setInput] = useState();

  const handleChange = (e) => {
      setInput(e.target.value)
  }
  return (
    <div className="App">
       <h3>useDefferedValue hook in react 2 .....</h3>

       <input type="text" value={input} onChange={handleChange}/>

       <list input={input} />
    </div>
  );
}

export default App;
