import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Counter from './Counter';

function App() {
  let [name, setName] = useState("Mayuk Mukherjee");
  let [address, setAddress] = useState("Barendranagar");
  let [email, setEmail] = useState("Mayuk@gmail.com");

  let [phy, setPhy] = useState(99);
  let [chem, setChem] = useState(88);
  let [math, setMath] = useState(97);
  let total = phy + chem + math;

  const change_Name = () =>{
     setName("Suryendu Sarkar");
  }

  const change_Address = () =>{
    setAddress("Thana para");
 }

 const change_Email = () =>{
  setEmail("Suryendu@gmail.com");
}

  const change_Science = () =>{
    setPhy(91);
    setChem(75);
    setMath(84);
    total = phy + chem + math;
  }

  return (
    <div className="App">
      <h2>Name : {name}</h2>
      <h2>Address : {address}</h2>
      <h2>Email : {email}</h2>
      <h2>Physics : {phy}</h2>
      <h2>Chemistry : {chem}</h2>
      <h2>Mathematics : {math}</h2>
      <h2>Total : {total}</h2>

      <button onClick={() => { change_Name()}}>change name</button><br/>
      <button onClick={() => { change_Address()}}>change address</button><br/>
      <button onClick={() => { change_Email()}}>change email</button><br/>
      <button onClick={() => { change_Science()}}>change Science</button><br/> 

      <Counter/>
    </div>
  );
}

export default App;
