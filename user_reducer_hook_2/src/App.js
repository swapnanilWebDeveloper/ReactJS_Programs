import logo from './logo.svg';
import './App.css';
import React,{useReducer} from "react";

const reducer = (state, action) => {
         console.log(state,action);

         switch(action.type){
              case "NextStudent" : 
                   if(state.num < 4){
                    return{num : state.num + 1};
                   }
                   else{
                      alert("no more students available");
                      return{num : state.num };
                    }

              case "PrevStudent" : 
                   if(state.num > 0){
                    return{num : state.num - 1};
                   }
                   else{
                      alert("there is no previous student");
                      return{num : state.num };
                    }

              default : return state;
         }
}

function App() {

  const stateInit = {num : 0};
  const [state , dispatch] = useReducer(reducer, stateInit);

  const student = [
    {name : "Mayuk Mukherjee", email : "Mayuk@gmail.com", physics : 99, chemistry : 88, mathematics : 97},
    {name : "Suryendu Sarkar", email : "Suryendu@gmail.com", physics : 78, chemistry : 81, mathematics : 91},
    {name : "Sanlap Gadai", email : "Sanlap@gmail.com", physics : 85, chemistry : 75, mathematics : 88},
    {name : "Souvik Chaterjee", email : "Souvik@gmail.com", physics : 92, chemistry : 68, mathematics : 84},
    {name : "Aninda Mukherjee", email : "Aninda@gmail.com", physics : 91, chemistry : 65, mathematics : 79},
];

  const student_data = student[state.num];

  student_data.total = student_data.physics + student_data.chemistry + student_data.mathematics;

  return (
    <div className="App">
        <h3>use reducer hook 2 in react</h3>
        <h3>Name is : {student_data.name}</h3>
        <h3>email is : {student_data.email}</h3>
        <h3>physics is : {student_data.physics}</h3>
        <h3>chemistry is : {student_data.chemistry}</h3>
        <h3>mathematics is : {student_data.mathematics}</h3>
        <h3>Total marks is : {student_data.total}</h3>

        <button onClick={() => dispatch({ type: "NextStudent"})}>Student forward</button>
        <button onClick={() => dispatch({ type: "PrevStudent"})}>Student previous</button>
    </div>
  );
}

export default App;
