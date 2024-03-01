import logo from './logo.svg';
import './App.css';
import RenderMethod from './RenderMethod';
import React,{useState} from 'react';

function App() {
  const student = {
     name : "Mayuk Mukherjee",
     email : "Mayuk@gmail.com",
     address : "Barendranagar",
     physics : 99,
     chemistry : 88,
     mathematics : 97
  }

      let  total = student.physics + student.chemistry + student.mathematics;

  return (
    <div className="App">
      <h2>Render Lifecycle</h2>
       <RenderMethod 
          Name = {student.name}
          Email = {student.email}
          Address = {student.address}
          Physics = {student.physics}
          Chemistry = {student.chemistry}
          Mathematics = {student.mathematics}
          Science_total = {total}
       /> 
    </div>
  );
}

export default App;
