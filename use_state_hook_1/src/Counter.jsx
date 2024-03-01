import React, {useState} from 'react';

export default function Counter(){
    const [sum,setSum] = useState(10);

    const increment = () => {
        if(sum > 145 ){
            alert("count can not be greater than 150");
        }
        else{
            setSum(sum + 5);
        }
    }

    const decrement = () => {
        if(sum >= 5 ){
            setSum(sum-5);
        }
        else{
            alert("count can not be less than 0");
        }
    }

    return(
        <div> 
           <p>Count : {sum}</p>
           <button onClick={() => {increment()}}>click to increase</button>
           <button onClick={() => {decrement()}}>click to decrease</button>
        </div>
    )
}