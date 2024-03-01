import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Counter from './Counter';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
       <h3>Use reducer hook 1</h3>

       <h3>Count : {count}</h3>
       <button onClick={() => setCount(count + 1)}>INCREMENT count</button>
       <button onClick={() => setCount(count - 1)}>DECREMENT count</button>

       <br/>
       <br/>

       <Counter />
    </div>
  );
}

export default App;
