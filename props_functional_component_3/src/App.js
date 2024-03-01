import logo from './logo.svg';
import './App.css';
import Employee from './Employee';
import React, {useState} from 'react';

function App() {

 const [name,setName] = useState("Mayuk Mukherjee");
 const [email,setEmail] = useState("Mayuk@gmail.com");
 const [address,setAddress] = useState("Barendra nagar");
 const [company,setCompany] = useState("TCS");

 const [basic,setBasic] = useState(75000);
 const [hra,setHra] = useState(9500);
 const [ta,setTa] = useState(8500);
 const [pf,setPf] = useState(5500);
 const [it,setIt] = useState(2500);

  function personal_info(){
    setName("Suryendu Sarkar");
    setEmail("Suryendu@gmail.com");
    setAddress("Thana Para");
    setCompany("Infosys");
  }

  function salary_info(){
      setBasic(55000)
      setHra(4500)
      setTa(3500)
      setPf(8500)
      setIt(7500)    
  }

  return (
    <div className="App">
       <h1>Props in React</h1>
       <Employee 
           empName = {name}
           empEmail = {email}
           empAdd = {address}
           empCompany = {company}
           salaryBasic = {basic}
           salaryHra = {hra}
           salryTa = {ta}
           salaryPf = {pf}
           salaryIt = {it}
           netSalary = {basic + hra + ta - pf - it}
       />
       <button onClick={() => {personal_info()}}>change personal information</button>
       <button onClick={() => {salary_info()}}>change personal information</button>
    </div>
  );
}

export default App;
