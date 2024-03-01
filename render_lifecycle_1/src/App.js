import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import RenderMethod from './RenderMethod';

function App() {
  const [name,setName] = useState("Mayuk Mukherjee");
  const [email,setEmail] = useState("Mayuk@gmail.com");
  const [address,setAddress] = useState("Barendranagar");
  const [company,setCompany] = useState("TCS");

  const [basic,setBasic] = useState(75000);
  const [hra,setHra] = useState(8500);
  const [ta,setTa] = useState(6500);
  const [pf,setPf] = useState(4500);
  const [it,setIt] = useState(3500);
  let [total, setTotal] = useState(0);

   let calc_salary = () => {
    total = basic + hra + ta - pf - it;
    setTotal(total);
   }

  const change_info = () => {
    setTotal(0);
    setName("Suryendu Sarkar");
    setAddress("Thanapara");
    setEmail("Suryendu@gamil.com");
    setCompany("Infosys");
    setBasic(56000);
    setHra(4500);
    setTa(3500);
    setPf(6500);
    setIt(8500);
   // calc_salary();
  }
  return (
    <div className="App">
       <h2>Life cycle Method</h2>
        <RenderMethod
          emp_name = {name}
          emp_email = {email}
          emp_address = {address}
          emp_company = {company}

          emp_basic = {basic}
          emp_hra = {hra}
          emp_ta = {ta}
          emp_pf = {pf}
          emp_it = {it} 
          emp_total = {total}         
        />
        <button onClick={() => change_info()}>Update information</button>
         <button onClick={() => calc_salary()}>total salary</button> 
    </div>
  );
}

export default App;
