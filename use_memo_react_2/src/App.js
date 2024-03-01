import logo from './logo.svg';
import './App.css';
import React,{useState, useMemo} from "react";

function App() {
  const [charge1,setCharge1] = useState(0);
  const [charge2, setCharge2] = useState(0);
  const [distance,setDistance] = useState(0);
 // const [force,setForce] = useState(0);
  const [count,setCount] = useState(0);

  const calc_force = useMemo(() => {
      console.log("calculating force .....");
      const K = (9 * (10 ** 9))
      let force = (K * charge1 * charge2) / (distance ** 2);
      console.log("force is = "+force);
      return force;
  },[charge1,charge2,distance])

  const Increase = () => {
       console.log("count is calculating....");
       setCount(count + 1);
  }
  return (
    <div className="App">
         <h3>Use memo in react</h3>

         <div>
             <h4>charge of particle 1 :  <input type="number"
               value={charge1}
               onChange={(e) => setCharge1(Number(e.target.value))}
             /> (coulomb)</h4>

             <h4>charge of particle 2 : <input type="number"
             value={charge2}
             onChange={(e) => setCharge2(Number(e.target.value))}
             /></h4>

             <h4>distance b/w two particles : <input type="number"
             value={distance}
             onChange={(e) => setDistance(Number(e.target.value))}
             /></h4>

             <h4>Force between two charged particles is : {calc_force} Newton</h4>
             <h4>Count : {count}</h4>
             <button onClick={() => Increase()}>Increase</button>
         </div>
    </div>
  );
}

export default App;
