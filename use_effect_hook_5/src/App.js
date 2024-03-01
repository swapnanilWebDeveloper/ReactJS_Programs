import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'; 
import UserTotal from './UserTotal';

function App() {

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(100); 

  useEffect(() => {
    //  console.log("After Render...count");
  },[count])

  useEffect(() => {
   //  console.log("After Render...total");
  },[total])

  return (
    <div className="App">
         <h1>UseEffect hook in react</h1>
         <UserTotal count={count} total={total}/>
         <button onClick={() => setCount(count + 1)}>update count</button>

         <button onClick={() => setTotal(total + 1)}>update total</button>
    </div>
  );
}

export default App;
