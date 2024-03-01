import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react'; 

function UserTotal(props) {

  useEffect(() => {
      console.log("Called with props...!!!");
  })

  useEffect(() => {
    console.log("Count is : "+props.count+" , total is : "+props.total);
},[props.count,props.total])

  return (
    <div className="App">
         <h1>UseEffect with condition hook</h1>
         <h3>Count : {props.count}</h3>
         <h3>Total : {props.total}</h3>
    </div>
  );
}

export default UserTotal;
