import logo from './logo.svg';
import './App.css';
import React,{useSyncExternalStore} from "react";

function App() {
   const width = useSyncExternalStore((listener) => {
      window.addEventListener("resize", listener);
      return()=> {
        window.removeEventListener("resize",listener);
      }
  }, ()=> window.innerHeight)
  return (
    <div className="App">
        <h3>useSyncExternalStore hook in react 1 ....</h3>

        <h3>window size : {width}</h3>
    </div>
  );
}

export default App;
