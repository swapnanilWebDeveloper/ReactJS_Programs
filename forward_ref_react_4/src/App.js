import logo from './logo.svg';
import './App.css';
import React,{useRef} from "react";
import ChildComponent from './ChildComponent';
import Children from './Children';

function App() {
   const dataRef = useRef(null);
   const elemRef = useRef(null);

   const change_data = () => {
        dataRef.current.value = "Mayuk Mukherjee";
        dataRef.current.style.color = "yellow";
        dataRef.current.style.backgroundColor = "blue";
        dataRef.current.style.fontSize = "15px";
        dataRef.current.style.fontWeight = "bold"
   }
   
   const change_element = () => {
    elemRef.current.innerHTML = "Suryendu Sarkar";
    elemRef.current.style.color = "red";
    elemRef.current.style.backgroundColor = "yellow";
    elemRef.current.style.fontSize = "20px";
    elemRef.current.style.fontWeight = "bold";

    elemRef.current.style.width = "200px";
    elemRef.current.style.height = "30px";
    elemRef.current.style.border = "8px solid green";
    elemRef.current.style.borderRadius = "12px";
    elemRef.current.style.marginLeft = "190px";
}

  return (
    <div className="App">
        <h3>Forward in React</h3>
        <ChildComponent ref={dataRef}/>
        <button onClick={() => change_data()}>click to change input data</button>

        <Children ref={elemRef}/>
        <button onClick={() => change_element()}>click to change html element</button>
    </div>
  );
}

export default App;
