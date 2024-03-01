import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";
import ChildComponentA from './ChildComponentA';

function App() {
  const [name,setName] = useState("Mayuk mUkherjee");
  const [email, setEmail] = useState("Mayuk@gmail.com");
  const [address,setAddress] = useState("Barendranagar");
  const [phy,setPhy] = useState(99);
  const [chem, setChem] = useState(88);
  const [math, setMath] = useState(97);

  const [count, setCount] = useState(0);

  const Increment = () => {
       setCount(count + 1);
  }

  const change_info = () => {
        setName("Suryendu Sarkar");
        setEmail('SUryendu@gmail.com');
        setAddress("Thanapara");
        setPhy(84);
        setChem(79);
        setMath(92);
  }

  console.log("parent component rendered !!!");
  return (
    <div className="App">
      <h3>Memo in react</h3>
       <ChildComponentA 
          name={name}
          email={email}
          address={address}
          phy={phy}
          chem={chem}
          math={math}
          total={ phy + chem + math}
       />

       <h2>Parent Count : {count}</h2>
       <button onClick={() => change_info()}>click to change information</button>
       <button onClick={() => Increment()}>INCREMENT</button>
    </div>
  );
}

export default App;
