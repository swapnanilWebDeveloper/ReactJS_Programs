/* import logo from './logo.svg';
import './App.css';
import User_1 from './User_1';
import User_2 from './User_2';
import User_3 from './User_3';

function App() {
  return (
    <>
    <div className="App">
    <h1>Hello everyone , I am swapnanil</h1>
    <User_1/>
    <User_2/>
    <User_3/>
    </div>
    </>
  );
}

export default App;  */




import logo from './logo.svg';
import './App.css';
import User_1 from './User_1';
import User_2 from './User_2';
import User_3 from './User_3';
import React, {Component} from "react";

function App() {
  return (
    <>
    <div className="App">
    <h1>Hello everyone , I am swapnanil</h1>
    <User_1/>
    <User_2/>
    <User_3/>
    <User_4/>
    </div>
    </>
  );
}

class User_4 extends Component{
  render(){
     return(
         <>
           <h2>User4 has joined our group</h2>
         </>
     )
  }
}

export default App;


