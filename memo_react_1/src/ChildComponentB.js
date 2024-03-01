import React,{memo} from 'react'

function ChildComponentB(props) {
    console.log("Child component B rendered...!!")
  return (
    <div>
        <h3>Child component B increment : {props.inc}</h3>
    </div>
  )
}

export default memo(ChildComponentB)