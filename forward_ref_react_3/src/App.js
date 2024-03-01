import logo from './logo.svg';
import './App.css';
import React,{useRef} from "react";
import ChildComponent from './ChildComponent';

function App() {

  const childRef = useRef();

  const handleParentButtonClick = () => {
    if(childRef.current){
        childRef.current.handleChildButtonClick();
        childRef.current.handleChildButtonClick_two();
    }
  }

  return (
    <div className="App">
       <h3>Forward reference is occuring</h3>
       <ChildComponent ref={childRef}/>
       <button onClick={handleParentButtonClick}>click child button from parent</button>
    </div>
  );
}

export default App;
