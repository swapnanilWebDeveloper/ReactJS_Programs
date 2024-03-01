 /* import logo from './logo.svg';
import './App.css';
import Users from './Users';

function App() {

  const handleButtonClick = () => {
      console.log("Button click !! invoked ..")
  }

  return (
    <div className="App">
        <h2>Pass function as props</h2>
        <Users handleClick={handleButtonClick}/>
    </div>
  );
}

export default App;  */

import logo from './logo.svg';
import './App.css';
import Users from './Users';
import React, {useState} from 'react';

function App() {

  const handleButtonClick = () => {
      console.log("Button click !! invoked ..")
  }

  const [count,setCount] = useState(0);
  const incrementCount = () => {
    setCount(count+1);
  }

  return (
    <div className="App">
        <h2>Pass function as props</h2>
        <Users handleClick={handleButtonClick} counter={count} increment={incrementCount}/>
    </div>
  );
}

export default App;
