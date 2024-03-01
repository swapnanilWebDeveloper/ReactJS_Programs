import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";

function App() {

  const students = [
     {name : "Mayuk Mukherjee", email : "Mayuk@gmail.com" , physics : 99, chemistry : 88, mathematics : 97},
     {name : "Suryendu Sarkar", email : "Suryendu@gmail.com" , physics : 88, chemistry : 78, mathematics : 94},
     {name : "Aninda Mukherjee", email : "Aninda@gmail.com" , physics : 92, chemistry : 84, mathematics : 86},
     {name : "Sanlap Gadai", email : "Sanlap@gmail.com" , physics : 84, chemistry : 77, mathematics : 93}
  ]
  let [sum,setSum] = useState(0);

    let science_sum =  students.map((elem, index) => {
                   sum = elem.physics + elem.chemistry + elem.mathematics;
                   elem.total = sum;
                  // setSum( elem.physics + elem.chemistry + elem.mathematics);
               return <h4>{elem.name+ " has got "+sum+" marks in total"}</h4>
  })
   console.log(science_sum); 
  return (
    <div className="App">
        <div>
            {
              students.map((candidate, index) => (
                  <div key={index}>
                        <h1>student number : {index+1}</h1>
                       <h3>Name is : {candidate.name}</h3>
                       <h3>Email is : {candidate.email}</h3>
                       <h3>marks in Physics : {candidate.physics}</h3>
                       <h3>marks in chemistry : {candidate.chemistry}</h3>
                       <h3>marks in mathematics : {candidate.mathematics}</h3>
                       <h3>marks in total : {candidate.total}</h3> 
                  </div>
              ))
            }
        </div>
        <h3>Students with their total marks : </h3>
        <div>{ science_sum}</div>
    </div>
  );
}

export default App;
