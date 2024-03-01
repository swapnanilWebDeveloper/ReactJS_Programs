import logo from './logo.svg';
import './App.css';
import React,{useState, useTransition, useEffect} from "react";

function App() {

  const [isPending, startTransition] = useTransition();
  const [count,setCount] = useState(0);

  useEffect(() => {
     console.log("useState run!!");
  },[count])

  const handleClick = () => {
        startTransition(() =>{
              setCount(count+1);
              console.log("handleclick run !!");
        })
  }

  return (
    <div className="App">
       <h3>use transition hook 1 ......</h3>
       <h3>Count : {count}</h3>
       <button onClick={() => handleClick()}>Update Count</button>
    </div>
  );
}

export default App;
