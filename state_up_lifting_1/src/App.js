import logo from './logo.svg';
import './App.css';
import ChildrenCmponentA from './ChildrenCmponentA';
import React,{useState} from "react";
import ChildComponentB from './ChildComponentB';

function App() {
  const [sharedState, setSharedState] = useState("");

  const handleChange = (newValue) => {
       setSharedState(newValue);
  }

  const parentAlert = (data, emp_info) => {
      alert(data);
      alert("name is : "+emp_info.name+", email : "+emp_info.email);
      emp_info.name = "Sanlap Gadai";
      emp_info.email = "Snalap@gmail.com";
      console.log("name is : "+emp_info.name+", email : "+emp_info.email);
  }
  return (
    <div className="App">
       <h2>State up lifting in React</h2>
       <ChildrenCmponentA sharedState={sharedState} handleChange={handleChange}/>
       <ChildComponentB  sharedState={sharedState} alert={parentAlert}/>
    </div>
  );
}

export default App;
