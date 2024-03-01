import logo from './logo.svg';
import './App.css';
import React, {useEffect,useState} from 'react';

function App() {

  const [count,setCount] = useState(0);

  useEffect(() => {
    //  alert("useEffect Hook...!!")
      console.log("useEffect Hook !!!")
  });

  return (
    <div className="App">
        <h1>useEffect Hook</h1>
        <h2>Count : {count}</h2>
        <button onClick={() => setCount(count+1)}>Update count</button>
    </div>
  );
}

export default App;
