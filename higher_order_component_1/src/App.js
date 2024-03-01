import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

function App() {
   // Higher Order Component
    const with_counter = (WrappedComponent) =>{
          return function WithCounter(props){
            const [count, setCount] = useState(0);
               const increment = () => {
                   setCount(count+1);
               }
              
               return(
                  <WrappedComponent {...props} count={count} increment={increment} />
               )
          }
    }
  
  // functional component
  const Counter = ({count, increment}) => {
      return(
        <div>
           <p>Count : {count}</p>
           <button onClick={increment}>Increment</button>
        </div>
      )
  }

  const CounterWithEnhancement = with_counter(Counter);
  return (
    <div className="App">
        <h1>Higher order component</h1> 

        <CounterWithEnhancement />
    </div>
  );
}

export default App;
