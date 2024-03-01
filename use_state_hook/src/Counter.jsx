import React, {useState} from 'react';

export default function Counter(){
    const [count, setCount] = useState(0);

    const Increment = () =>{
            setCount(count + 1);
    } 

    return(
        <div>
           <p>Count: {count}</p>
           <button onClick={() => {Increment()}}>Increment</button>
        </div>
    )
}

