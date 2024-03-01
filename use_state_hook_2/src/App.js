import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Counter from './Counter';

function App() {
  let [name,setName] = useState("Mayuk Mukherjee");
  let [email,setEmail] = useState("Mayuk@gmail.com");
  let [address,setAddress] = useState("Barendranagar");
  let [company,setCompany] = useState("TCS");

  let [basic,setBasic] = useState(75000);
  let [hra,setHra] = useState(6500);
  let [ta,setTa] = useState(8500);
  let [it,setIt] = useState(4500);
  let [pf,setPf] = useState(3500);
  
  let net_sal = basic + hra + ta - it - pf;

  const change_personal = () =>{
      setName("Suryendu Sarkar");
      setEmail("Suryendu@gmail.com");
      setAddress("Thanapara");
      setCompany("INfosys");
  }

  const change_professional = () => {
      setBasic(55000);
      setHra(5500);
      setTa(7500);
      setIt(3500);
      setPf(8500);
      net_sal = basic + hra + ta - it - pf;
  }

  return (
    <div className="App">
      <h1>Name : {name}</h1>
      <h1>Email : {email}</h1>
      <h1>Address : {address}</h1>
      <h1>Company: {company}</h1>

      <h2>Basic : {basic}</h2>
      <h2>House Rent Allowance : {hra}</h2>
      <h2>Travelling Allowance : {ta}</h2>
      <h2>Income tax : {it}</h2>
      <h2>provident fund : {pf}</h2>
      <h2>Net salary is : {net_sal}</h2>

      <button onClick={() => {change_personal()}}>change peronal data</button><br/>
      <button onClick={() => {change_professional()}}>change professional data</button><br/>

      <Counter/>
    </div>
  );
}

export default App;
