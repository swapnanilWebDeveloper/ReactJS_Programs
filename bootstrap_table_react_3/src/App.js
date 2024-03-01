import logo from './logo.svg';
import './App.css';
import Table from 'react-bootstrap/Table';

function App() {
  const EmployeeData = [
    { name: "Mayuk Mukherjee", email: "Mayuk@gmail.com", basic: 75000, HRA: 6500, TA: 8500, PF: 4500, IT: 3500 },
    { name: "Suryendu Sarkar", email: "Suryendu@gmail.com", basic: 55000, HRA: 4500, TA: 7500, PF: 8500, IT: 5500 },
    { name: "Aninda Mukherjee", email: "Aninda@gmail.com", basic: 45000, HRA: 3500, TA: 4500, PF: 7500, IT: 9500 },
    { name: "Sanlap Gadai", email: "Sanlap@gmail.com", basic: 35000, HRA: 9500, TA: 8500, PF: 2500, IT: 5500 },
  ];

  const net_salary = EmployeeData.map((data, ind) => {
    data.net_sal = data.basic + data.HRA + data.TA - data.PF - data.IT;
    return <h3>{data.net_sal}</h3>
  })
  return (
    <div className="App">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>basic</th>
            <th>HRA</th>
            <th>TA</th>
            <th>PF</th>
            <th>IT</th>
          </tr>
        </thead>
        <tbody>
            {EmployeeData.map((emp, index) => (
              <tr key={index}>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.basic}</td>
                <td>{emp.HRA}</td>
                <td>{emp.PF}</td>
                <td>{emp.IT}</td>
                <td>{emp.net_sal}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <h3>net salaries of the employees are : {net_salary}</h3>
    </div>
  );
}

export default App;
