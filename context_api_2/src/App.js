import logo from './logo.svg';
import './App.css';
import Child1 from './Child1';
import React,{createContext, useState} from 'react';

const MyContext = createContext();
const MyContextNew = createContext();

function App() {
  const studentData = [
    {name : "Mayuk Mukherjee", email : "Mayuk@gmail.com", phy : 99, chem : 88, math : 97},
    {name : "Suryendu Sarkar", email : "Suryendu@gmail.com", phy : 87, chem : 74, math : 84},
    {name : "Aninda Mukherjee", email : "Aninda@gmail.com", phy : 91, chem : 65, math : 88},
    {name : "Sanlap Gadai", email : "Sanlap@gmail.com", phy : 84, chem : 82, math : 93},
    {name : "Souvik Chatterjee", email : "Souvik@gmail.com", phy : 74, chem : 69, math : 88},
  ];

  const stu_param = ["name", "Email", "marks in physics", "marks in chemistry", "marks in mathematics", "Total marks is"];

  const [num, setNum] = useState(0);
  
  studentData[num].total = studentData[num].phy + studentData[num].chem + studentData[num].math;

  const next_student = () => {
    if(num < 4){
      setNum(num + 1);
    }
    else{
      alert("no next student is available....!!");
    }
  }

  const prev_student = () => {
    if(num > 0){
      setNum(num - 1);
    }
    else{
      alert("no previous student is available....!!");
    }
  }

  return (
    <div className="App">
      <MyContext.Provider value={studentData[num]}>
          <MyContextNew.Provider value={stu_param}>
          <h3>context api 2 in react...</h3>

          <Child1 />
          </MyContextNew.Provider>
      </MyContext.Provider>
      <button onClick={() => next_student()}>next student</button>
      <button onClick={() => prev_student()}>previous student</button>
    </div>
  );
}

export default App;
export {MyContext,MyContextNew}