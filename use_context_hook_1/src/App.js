import logo from './logo.svg';
import './App.css';
import Child1 from './Child1';
import React,{ createContext } from 'react';

const MyContext = createContext();

function App() {
  const shareData = {name : "Mayuk Mukherjee", email: "Mayuk@gmail.com", salary : 75000};

  return (
    <div className="App">
      <MyContext.Provider value={shareData}>
        <h3>Use context hook in react.....</h3>

        <Child1 />
        </MyContext.Provider>
    </div>
  );
}

export default App;
export {MyContext};