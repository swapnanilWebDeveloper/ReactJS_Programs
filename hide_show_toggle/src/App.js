import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";

function App() {
  const [status, setStatus] = useState(true);

  return (
    <div className="App">
        <h1>hide,show & toggle</h1>
        {status ? <div className="status">Content</div> : null}

        {/* hide and show */}
        <button onClick={() => setStatus(false)}>Hide</button>
        <button onClick={() => setStatus(true)}>Show</button>

        {/* toggle */}
        <button onClick={() => setStatus(!status)}>toggle</button>
    </div>
  );
}

export default App;
