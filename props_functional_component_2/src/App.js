import logo from './logo.svg';
import './App.css';
import {Student} from './Student';

function App() {
  const student_info = [
        {name : "Mayuk Mukherjee", email : "Mayuk@gail.com", address: "Barendranagar" , phy : 99, chem : 86, math : 97},
        {name : "Suryendu Sarkar", email: "Suryendu@gmail.com", address: "Thanapara", phy: 92, chem: 81, math : 89},
        {name : "Sanlap Gadai", email: "Sanlap@gmail.com", address: "Rail gate" ,phy: 88, chem: 76, math : 93},
        {name : "Aninda Mukherjee", email: "Aninda@gmail.com", address: "Das para" ,phy: 92, chem: 81, math : 89}
  ]

  return (
    <div className="App"> 
    <h1>props in react</h1>

    {
        student_info.map((stu, index) => (
            <Student 
              key = {index}
              Name = {stu.name}
              emailAddress = {stu.email}
              add = {stu.address}
              physics = {stu.phy}
              chemistry = {stu.chem}
              mathematics = {stu.math}
              sumation = {stu.phy + stu.chem + stu.math}
        />))
    }
    </div>
  );
}

export default App;
