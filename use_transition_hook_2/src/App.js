import logo from './logo.svg';
import './App.css';
import React, {useState, useTransition, useEffect} from "react";

function App() {

  const [input, setInput] = useState();
  const [dataList, setDataList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const DataSize = 10000;

  const handleChange = (e) => {
       setInput(e.target.value);

       startTransition(() => {
        const a = [];
        for(let i = 0; i < DataSize; i++){
             a.push(e.target.value);
        }
        setDataList(a);
       })
  }
  return (
    <div className="App">
       <h3>use transition hook in react 2 .....</h3>

       <input type="text" value={input} onChange={handleChange}/>
       {isPending ? "Loading..." : dataList.map((item, index) => {
          return <div key={index}>{item}</div>
       })}
    </div>
  );
}

export default App;
