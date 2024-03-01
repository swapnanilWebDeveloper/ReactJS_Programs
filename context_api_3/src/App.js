import logo from './logo.svg';
import './App.css';
import Child1 from './Child1';
import React,{createContext, useState} from "react";

const MyContext = createContext();
const MyContextNew = createContext();

function App() {
  const employeeData = [
     {name : "Mayuk Mukherjee", email : "Mayuk@gmail.com", basic : 75000, HRA : 6500, TA : 8500, PF : 3500, IT : 2500},
     {name : "Suryendu Sarkar", email : "Suryendu@gmail.com", basic : 55000, HRA : 4500, TA : 3500, PF : 6500, IT : 7500},
     {name : "Aninda Mukherjee", email : "Aninda@gmail.com", basic : 45000, HRA : 7500, TA : 9500, PF : 5500, IT : 4500},
     {name : "Sanlap Gadai", email : "Sanlap@gmail.com", basic : 85000, HRA : 9500, TA : 6500, PF : 4500, IT : 7500},
     {name : "Souvik Chatterjee", email : "Souvik@gmail.com", basic : 35000, HRA : 3500, TA : 5500, PF : 7500, IT : 9500},
  ];

  const emp_arr = ["name", "email", "basic", "HRA", "TA", "PF", "IT", "netSalary"];

  const [num, setNum] = useState(0);

  employeeData[num].netSalary = employeeData[num].basic + employeeData[num].HRA + employeeData[num].TA
                                                                         - employeeData[num].PF - employeeData[num].IT;
  const next_employee = () => {
      if(num < 4){
        setNum(num + 1);
      }  
      else{
        alert("no more next employee is available");
      }
  }

  const prev_employee = () => {
    if(num > 0){
      setNum(num - 1);
    }  
    else{
      alert("no more previous employee is available");
    }
  }
  return (
    <div className="App">
       <MyContext.Provider value={employeeData[num]}>
           <MyContextNew.Provider value={emp_arr}>
                <h3>useContext api is executing3.......</h3>

                <Child1 />
           </MyContextNew.Provider>
       </MyContext.Provider>

       <button onClick={() => next_employee()}>click for next Employee</button>
       <button onClick={() => prev_employee()}>click for previous Employee</button>
    </div>
  );
}

export default App;
export {MyContext,MyContextNew}