import logo from './logo.svg';
import './App.css';
import React,{useState, useCallback} from "react";
import ChildrenComponent from './ChildrenComponent';

function App() {
  const [count1, setCount1] = useState(0);
  console.log("Parent rendered ...!!!");

  const [count2, setCount2] = useState(0);

  const incrementCount = useCallback(() => {
        setCount2((prevCount) => prevCount + 1)
        console.log("useCallback Hook!!");
  },[]);
  return (
    <div className="App">
       <h3>UseCallBack Hook in react</h3>

       <p>Count1 : {count1}</p>
       <button onClick={() => setCount1(count1 + 1)}>increment1</button>   
       
       <p>Count2 : {count2}</p>
       <ChildrenComponent increment={incrementCount}/>
    </div>
  );
}

export default App;
