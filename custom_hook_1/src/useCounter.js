import {useState} from 'react'

function useCounter(initialValue = 5, step = 2) {
         const [count, setCount] = useState(initialValue);

         const increment = () => {
              setCount(count + step);
         };

         const decrement = () => {
            setCount(count - step);
       };

       return {count, increment, decrement}
}

export default useCounter
