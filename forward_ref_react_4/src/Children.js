import React,{forwardRef} from 'react'

function Children(props,childRef) {
  return (
    <div>
        <h3 ref={childRef}>Mitchell Johnson</h3>
    </div>
  )
}

export default forwardRef(Children)