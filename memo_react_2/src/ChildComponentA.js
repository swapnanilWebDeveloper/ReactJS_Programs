import React,{memo} from 'react'

function ChildComponentA(props) {
    console.log("child component rendered !!")
  return (
    <div>
         <h3>name is : {props.name}</h3>
         <h3>email is : {props.email}</h3>
         <h3>address is : {props.address}</h3>
         <h3>phy is : {props.phy}</h3>
         <h3>chem is : {props.chem}</h3>
         <h3>math is : {props.math}</h3>
         <h3>total is : {props.total}</h3>
    </div>
  )
}

export default memo(ChildComponentA)