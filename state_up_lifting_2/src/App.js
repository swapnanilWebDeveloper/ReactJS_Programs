import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import ChildrenComponentA from './ChildrenComponentA';
import ChildComponentB from './ChildComponentB';

function App() {
  const [sharedName, setSharedName] = useState("");
  const [sharedEmail, setSharedEmail] = useState("");
  const [sharedAddress, setSharedAddress] = useState("");
  const [sharedPhysics, setSharedPhysics] = useState();
  const [sharedChemistry, setSharedChemistry] = useState();
  const [sharedMathematics, setSharedMathematics] = useState();
  const [sharedTotal, setSharedTotal] = useState(); 

  const info_structure = (emp_data) => {
        console.log("Name is : "+emp_data.name+", Email is : "+emp_data.email+", address is : "+emp_data.address)
        console.log("company is : "+emp_data.company);
        let total = emp_data.basic + emp_data.HRA + emp_data.TA - emp_data.IT - emp_data.PF ;
        console.log("Basic = "+emp_data.basic+", HRA = "+emp_data.HRA+", TA = "+emp_data.TA+
                          ", PF = "+emp_data.PF+", IT = "+emp_data.IT);
        console.log("net salary is = "+total);
  }

  const changeInformation = (newName,newEmail,newAddress,newPhysics,newChemistry,newMathematics) => {
    setSharedName(newName);
    setSharedEmail(newEmail);
    setSharedAddress(newAddress);
    setSharedPhysics(newPhysics);
    setSharedChemistry(newChemistry);
    setSharedMathematics(newMathematics);
    setSharedTotal(parseInt(sharedPhysics) + parseInt(sharedChemistry) + parseInt(sharedMathematics)); 
    console.log(parseInt(sharedPhysics) + parseInt(sharedChemistry) + parseInt(sharedMathematics))
  }
  return (
    <div className="App">
      <ChildrenComponentA
        sharedName={sharedName}
        sharedEmail={sharedEmail}
        sharedAddress={sharedAddress}
        sharedPhysics={sharedPhysics}
        sharedChemistry={sharedChemistry}
        sharedMathematics={sharedMathematics}
        sharedTotal={sharedTotal} 
        changeInformation={changeInformation}
      />
      <ChildComponentB
        sharedName={sharedName}
        sharedEmail={sharedEmail}
        sharedAddress={sharedAddress}
        sharedPhysics={sharedPhysics}
        sharedChemistry={sharedChemistry}
        sharedMathematics={sharedMathematics}
        sharedTotal={sharedTotal} 
        consol_info = {info_structure}
      />
    </div>
  );
}

export default App;
