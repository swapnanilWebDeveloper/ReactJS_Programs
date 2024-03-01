import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";
import ChildComponent from './ChildComponent';
import ChildComponentB from './ChildComponentB';

function App() {
  const [count,setCount] = useState(0);
  const [num, setNum] = useState(0);

  console.log("parent component");
  return (
    <div className="App">
        <h2>Memo in React</h2>
       
        <ChildComponent />
        <ChildComponentB inc={num}/>
        <h2>Count : {count}</h2> 
        <button onClick={() => setCount(count+1)}>count++</button>
        <button onClick={() => setNum(num+1)}>increment++</button>
    </div>
  );
}

export default App;
