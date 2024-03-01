import logo from './logo.svg';
import './App.css';
import React,{useState, useMemo} from "react";

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [count,setCount] = useState(0);

  // normal method without dependency
 /* const sum = () => {
      console.log("calculating sum ....");
      return number1 + number2;
  }  */

  // function with dependency
  const sum = useMemo(() => {
    console.log("calculating sum ....");
    return number1 + number2;
  },[number1, number2])

  return (
    <div className="App">
       <h3>Use memo in react</h3>

       <div>
          <input type="number" 
             value={number1} 
             onChange={(e) => setNumber1(Number(e.target.value))}
          />

          <input type="number" 
             value={number2} 
             onChange={(e) => setNumber2(Number(e.target.value))}
          />

          {/* <p>Sum : {sum()}</p> */}
          <p>Sum : {sum}</p>

          <h3>Count Number : {count}</h3>
          <button onClick={() => setCount(count+1)}>click ++</button>
       </div>
    </div>
  );
}

export default App;
