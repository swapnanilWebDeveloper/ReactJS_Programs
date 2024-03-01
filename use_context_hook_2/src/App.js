import logo from './logo.svg';
import './App.css';
import React,{ createContext, useState} from "react"
import Child1 from './Child1';

const MyContext = createContext();

function App() {
  const studentData = [
        {name : "Mayuk Mukherjee", email : "Mayuk@gmail.com", address : "Barendra nagar", phy : 99, chem : 88, math : 97},
        {name : "Suryendu Sarkar", email : "Suryendu@gmail.com", address : "Thanapara", phy : 86, chem : 74, math : 92},
        {name : "Aninda Mukherjee", email : "Aninda@gmail.com", address : "Biswas para", phy : 88, chem : 64, math : 83},
        {name : "Sanlap Gadai", email : "Sanlap@gmail.com", address : "Rail Gate", phy : 91, chem : 84, math : 94},
        {name : "Souvik Chatterjee", email : "Souvik@gmail.com", address : "Chotobazar", phy : 87, chem : 98, math : 77}
  ];
   const [num, setNum] = useState(0);

   studentData[num].total = studentData[num].phy + studentData[num].chem + studentData[num].math;

   const next_index = () => {
    if(num < 4){
        setNum(num + 1);
    }
    else{
      alert("No more students available");
    }
   }

   const prev_index = () => {
    if(num > 0){
        setNum(num - 1);
    }
    else{
      alert("No previous student exists");
    }
   }
  return (
    <div className="App">
      <MyContext.Provider value={studentData[num]}>
        <h3>Use context hook in react....</h3>

        <Child1 />
      </MyContext.Provider>
       <button onClick={() => next_index()}>next student</button>
       <button onClick={() => prev_index()}>previous student</button>
    </div>
  );
}

export default App;
export {MyContext};