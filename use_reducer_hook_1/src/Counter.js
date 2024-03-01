import React,{useReducer} from 'react'

const reducer = (state, action) => {
     console.log(state,action);
     switch(action.type){
        case "INCREMENT":
              return{
                     count : state.count + 1,
                     num : state.num + 2,
                    };
        case "DECREMENT":
              return{
                      count : state.count - 1,
                      num : state.num - 2,
                     };
     
        default :  return state;
        }
}

export default function Counter() {
    const initialState = {count : 0, num : 2}
    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
         <p>Count : {state.count}</p>
         <p>Number : {state.num}</p>
         <button onClick={() => dispatch({ type : "INCREMENT"})}>INCREMENT count</button>
       <button onClick={() => dispatch({ type : "DECREMENT"})}>DECREMENT count</button>
    </div>
  )
}
