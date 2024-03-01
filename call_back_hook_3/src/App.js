import logo from './logo.svg';
import './App.css';
import React,{useState,useCallback} from "react"; 
import ChildrenComponent from './ChildrenComponent';

function App() {
  console.log("parent rendered ...!!")

  const employee_arr = [
      {name: "Mayuk Mukherjee", email : "Mayuk@gmail.com", basic: 75000, HRA : 8500, TA : 7500, PF : 5500, IT : 3500},
      {name: "Suryendu Sarkar", email : "Suryendu@gmail.com", basic: 45000, HRA : 3500, TA : 5500, PF : 8500, IT : 4500},
      {name: "Aninda Mukherjee", email : "Aninda@gmail.com", basic: 55000, HRA : 6500, TA : 7500, PF : 3500, IT : 4500},
      {name: "Sanlap Gadai", email : "Sanlap@gmail.com", basic: 25000, HRA : 9500, TA : 7500, PF : 5500, IT : 6500},
      {name: "Souvik Mondal", email : "Souvik@gmail.com", basic: 35000, HRA : 4500, TA : 6500, PF : 3500, IT : 5500},
      {name: "Swapnanil Roy", email : "Swapnanil@gmail.com", basic: 65000, HRA : 6500, TA : 4500, PF : 4500, IT : 3500}
  ];

   const [count, setCount] = useState(0);

   const [num, setNum] = useState(0);

   let data_employee = {};
   const employee_info = useCallback(() => {
          if(num < 5){
            setNum((prevNum) => prevNum + 1);
          }
          console.log("UsecallBack invoked");
   },[num]);

    data_employee = employee_arr[num];
  return (
    <div className="App">
       <h3>UseCallBack hook in react</h3>

       <p>Count: {count}</p>
       <button onClick={() => setCount(count+1)}>increment</button>

       <p>data for employee number : {num+1}</p>
       <p>name is : {data_employee.name}</p>
       <p>email is : {data_employee.email}</p>
       <p>basic is : {data_employee.basic}</p>
       <p>HRA is : {data_employee.HRA}</p>
       <p>TA is : {data_employee.TA}</p>
       <p>PF is : {data_employee.PF}</p>
       <p>IT is : {data_employee.IT}</p>
       <p>total marks is : {data_employee.basic + data_employee.HRA + data_employee.TA - data_employee.PF - data_employee.IT}</p>
       <ChildrenComponent employee_info={employee_info} />
    </div>
  );
}

export default App;
