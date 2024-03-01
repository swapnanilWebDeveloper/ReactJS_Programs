import logo from './logo.svg';
import './App.css';
import React,{useState,useCallback} from "react"; 
import ChildrenComponent from './ChildrenComponent';

function App() {
  console.log("parent rendered ...!!")

  const student_arr = [
      {name: "Mayuk Mukherjee", email : "Mayuk@gmail.com", physics : 99, chemistry : 88, mathematics : 97},
      {name: "Suryendu Sarkar", email : "Suryendu@gmail.com", physics : 84, chemistry : 76, mathematics : 92},
      {name: "Aninda Mukherjee", email : "Aninda@gmail.com", physics : 86, chemistry : 69, mathematics : 84},
      {name: "Sanlap Gadai", email : "Sanlap@gmail.com", physics : 78, chemistry : 98, mathematics : 85},
      {name: "Souvik Mondal", email : "Souvik@gmail.com", physics : 91, chemistry : 68, mathematics : 88},
      {name: "Swapnanil Roy", email : "Swapnanil@gmail.com", physics : 87, chemistry : 75, mathematics : 94}
  ];

   const [count, setCount] = useState(0);

   const [num, setNum] = useState(0);

   let data_student = {};
   const student_info = useCallback(() => {
          if(num < 5){
            setNum((prevNum) => prevNum + 1);
          }
          console.log("UsecallBack invoked");
   },[num]);

    data_student = student_arr[num];
  return (
    <div className="App">
       <h3>UseCallBack hook in react</h3>

       <p>Count: {count}</p>
       <button onClick={() => setCount(count+1)}>increment</button>

       <p>data for student number : {num+1}</p>
       <p>name is : {data_student.name}</p>
       <p>email is : {data_student.email}</p>
       <p>marks in physics is : {data_student.physics}</p>
       <p>marks in chemistry is : {data_student.chemistry}</p>
       <p>marks in mathematics : {data_student.mathematics}</p>
       <p>total marks is : {data_student.physics + data_student.chemistry + data_student.mathematics}</p>
       <ChildrenComponent student_info={student_info} />
    </div>
  );
}

export default App;
