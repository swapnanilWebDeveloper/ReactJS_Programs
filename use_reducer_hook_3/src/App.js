import logo from './logo.svg';
import './App.css';
import React,{useReducer} from "react";

const reducer = (state, action) => {
         console.log(state,action);

         switch(action.type){
              case "NextEMPLOYEE" : 
                   if(state.num < 4){
                    return{num : state.num + 1};
                   }
                   else{
                      alert("no more EMPLOYEEs available");
                      return{num : state.num };
                    }

              case "PrevEMPLOYEE" : 
                   if(state.num > 0){
                    return{num : state.num - 1};
                   }
                   else{
                      alert("there is no previous EMPLOYEE");
                      return{num : state.num };
                    }

              default : return state;
         }
}

function App() {

  const stateInit = {num : 0};
  const [state , dispatch] = useReducer(reducer, stateInit);

  const employee = [
    {name : "Mayuk Mukherjee", email : "Mayuk@gmail.com", basic : 75000, HRA : 8500, TA : 9500, PF : 4500,  IT : 3500 },
    {name : "Suryendu Sarkar", email : "Suryendu@gmail.com", basic : 85000, HRA : 6500, TA : 4500, PF : 7500,  IT : 9500 },
    {name : "Sanlap Gadai", email : "Sanlap@gmail.com", basic : 45000, HRA : 6500, TA : 8500, PF : 2500,  IT : 4500 },
    {name : "Souvik Chaterjee", email : "Souvik@gmail.com", basic : 55000, HRA : 3500, TA : 5500, PF : 7500,  IT : 8500 },
    {name : "Aninda Mukherjee", email : "Aninda@gmail.com", basic : 25000, HRA : 6500, TA : 4500, PF : 2500,  IT : 3500 },
];

  const employee_data = employee[state.num];

  employee_data.total = employee_data.basic + employee_data.HRA + employee_data.TA - employee_data.PF - employee_data.IT;

  return (
    <div className="App">
        <h3>use reducer hook 2 in react</h3>
        <h3>Name is : {employee_data.name}</h3>
        <h3>email is : {employee_data.email}</h3>
        <h3>basic is : {employee_data.basic}</h3>
        <h3>HRA is : {employee_data.HRA}</h3>
        <h3>TA is : {employee_data.TA}</h3>
        <h3>PF is : {employee_data.PF}</h3>
        <h3>IT is : {employee_data.IT}</h3>
        <h3>net salary is : {employee_data.total}</h3>

        <button onClick={() => dispatch({ type: "NextEMPLOYEE"})}>EMPLOYEE forward</button>
        <button onClick={() => dispatch({ type: "PrevEMPLOYEE"})}>EMPLOYEE previous</button>
    </div>
  );
}

export default App;
