import logo from './logo.svg';
import './App.css';
import Employee_1 from './Employee_1';
import Employee_2 from './Employee_2';
import Employee_3 from './Employee_3';
import Employee_4 from './Employee_4';
import React, {Component} from "react";

function App() {
  return (
    <>
    <div className="App">
      <h1>Congratulations , I have done graduation.....</h1>
      <Employee_1/>
      <Employee_2/>
      <Employee_3/>
      <Employee_4/>
      <Employee_5/>
    </div>
    </>
  );
}

class Employee_5 extends Component{
  render(){
      return(
          <>
           <h2>Employee5 is the most efficient Employee</h2>
          </>
      )
  }
}

export default App;
