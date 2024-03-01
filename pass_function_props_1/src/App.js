import logo from './logo.svg';
import './App.css';
import Employee from './Employee';
import React,{ useState } from 'react';

function App() {
  const employee_data = {
      name : "Mayuk Mukherjee",
      email : "Mayuk@gmail.com",
      address : "Barendranagar",
      company : "TCS",
      basic : 75000,
      hra : 8500,
      ta : 6500,
      pf : 5500,
      it : 4500
  }
  let [total,setTotal] = useState(0);
  const calc_salary = () => {
      total = employee_data.basic + employee_data.hra + employee_data.ta - employee_data.pf - employee_data.it; 
      setTotal(total);
  }
  return (
    <div className="App">
       <h3>Pass function as props.</h3>
       <Employee emp_info={employee_data} salary_employee={() => {calc_salary()}} net_salary={total}/>
    </div>
  );
}

export default App;
