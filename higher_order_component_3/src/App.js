import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";

function App() {
  //Higher order Component
  const student_data = (StudentInfomationComponent) => {
               return function StudentData(props){
                     const [name, setName] = useState("Mayuk Mukherjee");
                     const [email, setEmail] = useState("Mayuk@gmail.com");
                     const [address,setAddress] = useState("Barendranagar");
                     const [physics, setPhysics] = useState(99);
                     const [chemistry, setChemistry] = useState(88);
                     const [math, setMath] = useState(97);
                     const [total,setTotal] = useState(0);

                     const change_data = () => {
                          setName("Suryendu Sarkar");
                          setEmail("Suryendu@gmail.com");
                          setAddress("Thanapara");
                          setPhysics(83);
                          setChemistry(76);
                          setMath(92);
                          setTotal(0);
                     }

                     const calc_total = () => {
                         setTotal(physics + chemistry + math);
                     }

                     return(
                        <StudentInfomationComponent {...props} name={name} email={email} address={address} physics={physics} 
                              chemistry={chemistry} math={math} total={total} change_data={change_data} calc_total={calc_total}/>
                     )
               }
  }

  //functional component
   const Student_info = ({name, email, address, physics, chemistry, math, total, change_data, calc_total}) => {
                  return(
                     <div>
                          <p>name is : {name}</p>
                          <p>Email is : {email}</p>
                          <p>address is : {address}</p>
                          <p>physics is : {physics}</p>
                          <p>chemistry is : {chemistry}</p>
                          <p>Mathematics is : {math}</p>
                          <p>Total is : {total}</p>
                          <button onClick={change_data}>change student's data</button>
                          <button onClick={calc_total}>calculate total marks</button>  
                     </div>
                  )
   }

   const StudentWithENhancement = student_data(Student_info);
  return (
    <div className="App">
       <h3>higher order component</h3>
       <StudentWithENhancement />
    </div>
  );
}

export default App;
