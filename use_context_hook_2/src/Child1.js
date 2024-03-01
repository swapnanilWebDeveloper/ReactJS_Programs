import React from 'react'
import Child2 from './Child2'

export default function Child1() {
  return (
    <div>
       <h3>Child1 component is executing.....</h3> 
       
       <Child2 />
    </div>
  );
}
