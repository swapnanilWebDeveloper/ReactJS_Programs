import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Example from './Example';

function App() {
      return(
        <div className="App">
           <h2>Pure component in App function</h2>
           <Example />
        </div>
      );
}

export default App;
