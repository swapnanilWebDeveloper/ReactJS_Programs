import React,{memo} from 'react'

function ChildComponent() {
    console.log("Child component rendered !!");
  return (
    <div>
       <h3>Child component </h3>
    </div>
  )
}

export default memo(ChildComponent);