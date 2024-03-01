import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Counter from './Counter';

function App() {
  let [data,setData] = useState("CODE4education");

  const UpdateData = () => {
    setData("Bhaskar Gupta");
      alert(data);
  }

  console.log("Render -------- ");

  return (
    <div className="App">
       <h1>{data}</h1>

       <button onClick={() => {UpdateData()}}>Update value</button>

       <Counter/>
    </div>
  );
}

export default App;
