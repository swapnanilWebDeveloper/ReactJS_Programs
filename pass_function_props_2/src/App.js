import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';
import Student from './Student';

function App() {
  const [name, setName] = useState("Mayuk Mukherjee");
  const [email,setEmail] = useState("Mayuk@gmail.com");
  const [address,setAddress] = useState("Barendranagar");
  const [physics,setPhysics] = useState(99);
  const [chemistry,setChemistry] = useState(88);
  const [mathematics, setMathematics] = useState(97);
  let [total,setTotal] = useState(0);
  
  let calc_science = () => {
       total = physics + chemistry + mathematics;
       setTotal(total);
  }

  let change_info = () => {
    setName("Suryendu Sarkar");
    setAddress("Thanapara");
    setEmail("Suryendu@gmail.com");
    setPhysics(91);
    setChemistry(77);
    setMathematics(86);
    calc_science();
  }
  return (
    <div className="App">
       <h3>pass function as this.props.</h3>
       <Student 
          stu_name = {name}
          stu_email = {email}
          stu_address = {address}
          stu_physics = {physics}
          stu_chemistry = {chemistry}
          stu_mathematics = {mathematics}
          stu_total = {total}
          science_total = {calc_science}
          change_student = {change_info}
       />
    </div>
  );
}

export default App;
