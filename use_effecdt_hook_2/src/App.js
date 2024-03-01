import logo from './logo.svg';
import './App.css';
import React, {useEffect,useState} from 'react';

function App() {

  const [count,setCount] = useState(0);
  const [name, setName] = useState("Mayuk Mukherjee");
  const [email, setEmail] = useState("Mayuk@gmail.com");
  const [address, setAddress] = useState("Barendranagar");

  useEffect(() => {
    //  alert("useEffect Hook...!!")
      console.log("useEffect Hook !!!")
  },[name,count]);

  return (
    <div className="App">
        <h1>useEffect Hook</h1>
        <h2>Count : {count}</h2>
        <h2>Name : {name}</h2>
        <h2>Email : {email}</h2>
        <h2>Address : {address}</h2>
        <button onClick={() => setCount(count+1)}>Update count</button><br/>
        <button onClick={() => setName("Suryendu Sarkar")}>Update name</button><br/>
        <button onClick={() => setEmail("Suryendu@gmail.com")}>Update email</button><br/>
        <button onClick={() => setAddress("Thana para")}>Update address</button>
    </div>
  );
}

export default App;
