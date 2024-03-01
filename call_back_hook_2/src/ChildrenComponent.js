import React,{memo} from 'react'

function ChildrenComponent({student_info}) {
    console.log("Children component rendered ...!!");
  return (
    <div>
        <button onClick={student_info}>click to change data</button>
    </div>
  )
}

export default memo(ChildrenComponent);