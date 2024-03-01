import logo from './logo.svg';
import './App.css';
import Table from 'react-bootstrap/Table';

function App() {
  const studentData = [
    { id: 1, name: "Swapnanil Roy", email : "Swapnanil@gmail.com", physics : 99, chemistry : 88, mathematics : 97 },
    { id: 2, name: "Mayuk Mukherjee", email : "Mayuk@gmail.com", physics : 91, chemistry : 74, mathematics : 87 },
    { id: 3, name: "Suryendu Sarkar", email : "Suryendu@gmail.com", physics : 86, chemistry : 83, mathematics : 74 },
    { id: 4, name: "Aninda Mukherjee", email : "Aninda@gmail.com", physics : 92, chemistry : 84, mathematics : 83 }
  ];
  const total_marks =  studentData.map((value, index) =>{
             value.total = value.physics + value.chemistry + value.mathematics;
             return <h3>{value.physics + value.chemistry + value.mathematics}</h3>
   })
  return (
    <div className="App">
      <h1>Bootstrap Table in React</h1>
      <Table striped bordered hover size='sm' variant="dark" responsive="lg" >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>physics</th>
            <th>chemistry</th>
            <th>mathematics</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>{studentData.map((data, index) => (
            <tr key={index}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.physics}</td>
            <td>{data.chemistry}</td>
            <td>{data.mathematics}</td>
            <td>{data.total}</td>
          </tr>
        ))}</tbody>
      </Table>
     <h3>totl marks of students are respectively : {total_marks}</h3> 
    </div>
  );
}

export default App;
