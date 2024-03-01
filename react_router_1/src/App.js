import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Student from './Component/Student';
import Employee from './Component/Employee';
import React, {useState} from "react";

function App() {
  // student data is in the form of array of objects...
  const studentData = [
    {name : "Mayuk Mukherjee", email : "Mayuk@gmail.com", physics : 99, chemistry : 88, mathematics : 97},
    {name : "Suryendu Srakar", email : "Suryendu@gmail.com", physics : 84, chemistry : 75, mathematics : 91},
    {name : "Aninda Mukherjee", email : "Aninda@gmail.com", physics : 88, chemistry : 62, mathematics : 88},
    {name : "Sanlap Gadai", email : "Sanlap@gmail.com", physics : 91, chemistry : 69, mathematics : 84},
    {name : "Souvik Chatterjee", email : "Souvik@gmail.com", physics : 81, chemistry : 77, mathematics : 74},
    {name : "Swapnanil Roy", email : "Swapnanil@gmail.com", physics : 87, chemistry : 78, mathematics : 94},
  ];

  // employee data is in the form of array of objects....
  const employeeData = [
    {name : "Mayuk Mukherjee", email : "Mayuk@gmail.com", basic : 75000, HRA : 8500, TA : 9500, PF : 4500, IT : 3500},
    {name : "Suryendu Srakar", email : "Suryendu@gmail.com", basic : 45000, HRA : 5500, TA : 4500, PF : 7500, IT : 6500},
    {name : "Aninda Mukherjee", email : "Aninda@gmail.com", basic : 65000, HRA : 6500, TA : 8500, PF : 3500, IT : 1500},
    {name : "Sanlap Gadai", email : "Sanlap@gmail.com", basic : 95000, HRA : 4500, TA : 3500, PF : 6500, IT : 7500},
    {name : "Souvik Chatterjee", email : "Souvik@gmail.com", basic : 85000, HRA : 3500, TA : 7500, PF : 6500, IT : 5500},
    {name : "Swapnanil Roy", email : "Swapnanil@gmail.com", basic : 125000, HRA : 12000, TA : 9500, PF : 6500, IT : 7500},
  ]
  const [num, setNum] = useState(0);

  studentData[num].total = studentData[num].physics + studentData[num].chemistry + studentData[num].mathematics;

  employeeData[num].netSalary = employeeData[num].basic + employeeData[num].HRA + employeeData[num].TA - employeeData[num].PF 
                                           - employeeData[num].IT;
  const next_candidate = () => {
         if(num < 5){
          setNum(num + 1);
         }
         else{
           alert("no more next candidate available....")
         }
  }

  const previous_candidate = () => {
    if(num > 0){
     setNum(num - 1);
    }
    else{
      alert("no previous candidate available....")
    }
  }
  return (
    <div className="App">
       <h3>react router v6 introduction.....</h3>
        <BrowserRouter>
             <Routes>
                 <Route path="/student_information"
                  element={<Student 
                              name={studentData[num].name}
                              email={studentData[num].email}
                              physics={studentData[num].physics}
                              chemistry={studentData[num].chemistry}
                              mathematics={studentData[num].mathematics}
                              total={studentData[num].total}
                              />}/> 
                 <Route path="/employee_information" 
                      element={<Employee
                        name={employeeData[num].name}
                        email={employeeData[num].email}
                        basic={employeeData[num].basic}
                        HRA={employeeData[num].HRA}
                        TA={employeeData[num].TA}
                        PF={employeeData[num].PF}
                        IT={employeeData[num].IT}
                        netSalary={employeeData[num].netSalary} />}/> 
             </Routes>
        </BrowserRouter>
        <button onClick={() => previous_candidate()}>previous candidate</button>
        <button onClick={() => next_candidate()}>next candidate</button>
    </div>
  );
}

export default App;
