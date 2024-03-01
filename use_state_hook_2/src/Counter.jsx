import React, {useState} from 'react';

export default function Counter(){
     const [num, setNum] = useState(0);

     const Increase = () =>{
        if(num < 10){
            setNum(num+1);
        }
        else{
            alert("number can not be greater than 10");
        }
     }

     const Decrease = () =>{
        if(num > 0){
            setNum(num-1);
        }
        else{
            alert("number can not be less than 0");
        }
     }

     return(
        <div>
           <p>Number count(min : 0, max : 10) : {num}</p>
           <button onClick={() => {Increase()}}>click to Increase</button>
           <button onClick={() => {Decrease()}}>click to Decrease</button>
        </div>
     )
}