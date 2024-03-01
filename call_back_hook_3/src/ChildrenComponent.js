import React,{memo} from 'react'

function ChildrenComponent({employee_info}) {
    console.log("Children component rendered ...!!");
  return (
    <div>
        <button onClick={employee_info}>click to change data</button>
    </div>
  )
}

export default memo(ChildrenComponent);