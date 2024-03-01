import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // Higher Order Component
  const developer_information = (EmployeeAnalysis) => {
          return function DeveloperInfo(props){
                   const [name, setName] = useState("Mayuk Mukherjee");
                   const [email, setEmail] = useState("Mayuk@gmail.com");
                   const [address, setAddress] = useState("Barendranagar");
                   const [company, setCompany] = useState("TCS");
                   const [basic, setBasic] = useState(75000);
                   const [hra, setHRA] = useState(8500);
                   const [ta, setTA] = useState(9500);
                   const [pf, setPF] = useState(4500);
                   const [it, setIT] = useState(2500);
                   const [total, setTotal] = useState(0);


                   const change_employee = () => {
                        setName("Suryendu Sarkar");
                        setEmail("Suryendu@gmail.com");
                        setAddress("Thana para");
                        setCompany("Infosys");
                        setBasic(45000);
                        setHRA(6500);
                        setTA(3500);
                        setPF(8500);
                        setIT(7500);
                        setTotal(0);
                   }

                   const net_sal = () => {
                    setTotal(basic + hra + ta - pf - it);
                   }

                   return(
                      <EmployeeAnalysis {...props} name={name} email={email} address={address} company={company} 
                      basic={basic} hra={hra} ta={ta} pf={pf} it={it} total={total} change_employee={change_employee} net_sal={net_sal} />
                   )
          }
  }
  
  {/*  company={company} 
                             basic={basic} hra={hra} ta={ta} pf={pf} it={it} total={total} change_employee={change_employee} */}
  {/* company, basic, hra, ta, pf, it, total, change_employee  */}
  // functional component 
  const info_developer = ({name, email, address, company, basic, hra, ta, pf, it, total, change_employee, net_sal }) =>{
           return(
               <div>
                   <p>Name : {name}</p>
                   <p>Email : {email}</p>
                   <p>Address : {address}</p>
                   <p>company : {company}</p>
                   <p>Basic : {basic}</p>
                   <p>HRA : {hra}</p>
                   <p>TA : {ta}</p>
                   <p>PF : {pf}</p>
                   <p>IT : {it}</p>
                   <p>Total : {total}</p> 
           <button onClick={change_employee}> change Employee information</button>
           <button onClick={net_sal}>calculate net salary</button> 
               </div>
           )
  }

  const DeveloperDataAnalysis = developer_information(info_developer);
  return (
    <div className="App">
       <h3>higher order conmponents in react.js</h3>

       <DeveloperDataAnalysis />
    </div>
  );
}

export default App;
