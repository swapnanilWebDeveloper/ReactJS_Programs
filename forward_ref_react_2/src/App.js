import logo from './logo.svg';
import './App.css';
import React,{useRef} from "react";
import ChildComponent from './ChildComponent';

function App() {

  const childRef = useRef();

  const handleChildButtonClick = () => {
    if(childRef.current){
        childRef.current.handleChildButtonClick();
    }
  }

  return (
    <div className="App">
       <h3>Forward ref in react</h3>
       
      {/* <ChildComponent ref={inputRef}/>
  <button onClick={updateInput}>Update button</button> */}

       <ChildComponent ref={childRef}/>
       <button onClick={handleChildButtonClick}>click child button from parent</button>
    </div>
  );
}

export default App;
