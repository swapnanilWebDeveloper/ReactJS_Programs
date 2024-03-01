import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'; 

function App() {

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(100); 

  useEffect(() => {
      console.log("After Render...count")
  },[count])

  useEffect(() => {
    console.log("After Render...total")
},[total])

  return (
    <div className="App">
         <h1>UseEffect with condition hook</h1>
         <h3>Count : {count}</h3>
         <button onClick={() => setCount(count + 1)}>update count</button>

         <h3>Total : {total}</h3>
         <button onClick={() => setTotal(total + 1)}>update total</button>
    </div>
  );
}

export default App;
