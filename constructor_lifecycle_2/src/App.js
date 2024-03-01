import logo from './logo.svg';
import './App.css';
import Employee from './Employee';
import React, {useState} from "react";

function App() {
   const employee_data = {
       name : "Mayuk Mukherjee",
       email : "Mayuk@gmail.com",
       address : "Barendranagar",
       basic : 75000,
       hra : 8500,
       ta : 6500,
       pf : 3500,
       it : 2500
   } 
 /*  let [total,setTotal] = useState(0);
      const calc_total = () => {
        total = employee_data.basic + employee_data.hra + employee_data.ta - employee_data.pf - employee_data.it;
        setTotal(total); 
        return total;
      } */
  return (
    <div className="App">
       <Employee 
       emp_name = {employee_data.name}
       emp_email = {employee_data.email}
       emp_address = {employee_data.address}
       emp_basic = {employee_data.basic}
       emp_hra = {employee_data.hra}
       emp_ta = {employee_data.ta}
       emp_pf = {employee_data.pf}
       emp_it = {employee_data.it}
        emp_total = {employee_data.basic + employee_data.hra + employee_data.ta - employee_data.pf - employee_data.it}
       />
    </div>
  );
}

export default App;
