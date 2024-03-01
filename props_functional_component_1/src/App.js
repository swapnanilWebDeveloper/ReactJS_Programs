import logo from './logo.svg';
import './App.css';
import UserCard from './UserCard';
import React,{useState} from 'react'

function App() {
  
  const [name,setName] = useState("Bhaskar Gupta");
  const [email,setEmail] = useState("Bhaskar@gmail.com");

 /* const userData = [
    { name: 'John Doe', age: 25, email: "john.doe@example.com"},
    { name: 'Jane Smith', age: 30, email: "jane.smith@example.com"},
    { name: 'Bob Johnson', age: 28, email: "Bob.johnson@example.com"},
    { name: 'Hugh Jackman', age: 35, email: "Hugh.Jackman@example.com"},
];  */
  return (
    <div className="App">
      <h1>Props in React</h1>
       <UserCard myName={name} myEmail={email}/> 
       <button onClick={() => setName("code4Education")}>Update Name</button>
       <button onClick={() => setEmail("Bill@gmail.com")}>Update Email</button>

     { /* {
        userData.map((user,index) => (
          <UserCard
            key = {index}
            name = {user.name}
            age = {user.age}
            email = {user.email}
         />
        ))}
        */ }
    </div>
  );
}
export default App;
