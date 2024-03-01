import logo from './logo.svg';
import './App.css';

function App() {

  let data = "CODE4Education";
  const demo = () => {
       data = "ThapaTechnical";
       let course = "react.js";
       alert("hey, I am learning "+course+" from "+data);
  }

  const test = () => {
    alert("I am testing the code!!..");
}

  const calc_science= (phy,chem,math) => {
       let total;
       total = phy + chem + math;
       console.log("Total marks in science = "+total);
       console.log("marks in physics = "+phy+" chemistry = "+chem+", mathematics = "+math);
  }  

  return (
    <div className="App">
    <h1>Hello Programmers</h1>
    <button onClick={demo}>Click Me</button>
    <button onClick={() => { alert("I will be a MERN stack developer")}}>Click on it</button>
    <button onClick={ () => { test()}}>Click here</button>
    <button onClick={ () => { calc_science(99,97,88)}}>science total</button>
    </div>
  );
}

export default App;
