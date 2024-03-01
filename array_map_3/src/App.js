import logo from './logo.svg';
import './App.css';

function App() {
  const employee_data = [
    { name: "Mayuk Mukherjee", email: "Mayuk@gmail.com", basic: 75000, HRA: 6500, TA: 8500, PF: 4500, IT: 3500 },
    { name: "Suryendu Sarkar", email: "Suryendu@gmail.com", basic: 45000, HRA: 5500, TA: 3500, PF: 7500, IT: 6500 },
    { name: "Aninda Mukherjee", email: "Aninda@gmail.com", basic: 60000, HRA: 7500, TA: 3500, PF: 4500, IT: 9500 }
  ];

  const net_salary = employee_data.map((emp_data) => {
    emp_data.total = emp_data.basic + emp_data.HRA + emp_data.TA - emp_data.PF - emp_data.IT;
    return <h3>{emp_data.name + " has a net salary of : " + emp_data.total + " INR/-"}</h3>
  })
  return (
    <div className="App">
      <h4>Array with map function</h4>
      <div>
        {
          employee_data.map((emp, index) => (
            <div key={index}>
              <h2>Employee number {index + 1}</h2>
              <h3>Name is : {emp.name}</h3>
              <h3>email is : {emp.email}</h3>
              <h3>basic salary is : {emp.basic}</h3>
              <h3>HRA is : {emp.HRA}</h3>
              <h3>TA is : {emp.TA}</h3>
              <h3>PF is : {emp.PF}</h3>
              <h3>IT is : {emp.IT}</h3>
              <h3>net salary is : {emp.total}</h3>
            </div>
          ))
        }
      </div>
       <div>
         {net_salary}
       </div>
    </div>
  );
}

export default App;
