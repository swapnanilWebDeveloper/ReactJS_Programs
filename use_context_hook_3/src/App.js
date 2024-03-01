import logo from './logo.svg';
import './App.css';
import ChildA from './ChildA';
import React, {createContext, useState} from "react";

const MyContext = createContext();

function App() {
  const employeeData = [
    {name: "Mayuk Mukherjee", email : "Mayuk@gmail.com", basic : 75000, HRA : 8500, TA : 9500, PF : 4500, IT : 3500},
    {name: "Suryendu Sarkar", email : "Suryendu@gmail.com", basic : 55000, HRA : 4500, TA : 3500, PF : 6500, IT : 7500},
    {name: "Aninda Mukherjee", email : "Aninda@gmail.com", basic : 45000, HRA : 8500, TA : 5500, PF : 6500, IT : 7500},
    {name: "Sanlap Gadai", email : "Sanlap@gmail.com", basic : 65000, HRA : 7500, TA : 5500, PF : 3500, IT : 2500},
    {name: "Souvik Chaterjee", email : "Souvik@gmail.com", basic : 95000, HRA : 8500, TA : 6500, PF : 2500, IT : 5500},
  ];

  const [ind, setInd] = useState(0);

  employeeData[ind].netSalary = employeeData[ind].basic + employeeData[ind].HRA + employeeData[ind].TA - employeeData[ind].PF - employeeData[ind].IT;

  const next_employee = () => {
        if(ind < 4){
          setInd(ind + 1);
        }
        else{
          alert("no next employee is available");
        }
  }

  const prev_employee = () => {
    if(ind > 0){
      setInd(ind - 1);
    }
    else{
      alert("no previous employee is available");
    }
  }

  return (
    <div className="App">
      <MyContext.Provider value={employeeData[ind]}>
      <h3>UseContext hook 3 in react</h3>

      <ChildA />
      </MyContext.Provider>
      <button onClick={() => next_employee()}>Next Employee</button>
      <button onClick={() => prev_employee()}>Previous Employee</button>
    </div>
  );
}

export default App;
export {MyContext}
