import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";

function App() {
  const [name,setName] = useState("");

  const changeName = (event) => {
       setName(event.target.value);
       console.log(name);
  }

  return (
    <div className="App">
       <h3>Controlled component</h3>
       <input type="text" value={name} onChange={changeName}/>

       <p>Name is : {name}</p>
    </div>
  );
}

export default App;
