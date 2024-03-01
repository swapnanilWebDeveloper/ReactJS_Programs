import logo from './logo.svg';
import './App.css';
import Table from 'react-bootstrap/Table';

function App() {
  const tableData = [
    { id: 1, name: "John Doe", age: 30, location: "NewYork" },
    { id: 2, name: "Jane Smith", age: 25, location: "London" },
    { id: 3, name: "Amit Kumar", age: 20, location: "India" },
    { id: 4, name: "John Wick", age: 28, location: "USA" }
  ]
  return (
    <div className="App">
      <h1>Bootstrap Table in React</h1>
      <Table striped bordered hover size='sm' variant="dark" responsive="lg" >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>location</th>
          </tr>
        </thead>
        <tbody>{tableData.map((data, index) => (
             data.age > 25 ?
            <tr key={index}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td>{data.location}</td>
          </tr>
          : null
        ))}</tbody>
      </Table>
    </div>
  );
}

export default App;
