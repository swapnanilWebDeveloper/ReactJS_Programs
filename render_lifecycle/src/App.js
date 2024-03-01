import logo from './logo.svg';
import './App.css';
import RenderMethod from './RenderMethod';
import React,{useState} from 'react';

function App() {
  const [name, setName] = useState("code4Education");
  return (
    <div className="App">
       <h2>Life cycle method</h2>
       {/* example 1*/}
       {/* <RenderMethod name ={name}/> */}
       {/* <button onClick={() => setName("Bhaskar Gupta")}>Update Name</button> */}
        <RenderMethod />
    </div>
  );
}

export default App;
