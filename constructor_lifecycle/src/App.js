import logo from './logo.svg';
import './App.css';
import Users from "./Users"

function App() {
  const student = {
      address : "barendranagar"
  }
  return (
    <div className="App">
       <h3>Constructor life cycle method</h3>
       <Users 
          email="Mayuk@gmail.com"
          addr = {student.address}
       />
    </div>
  );
}

export default App;
