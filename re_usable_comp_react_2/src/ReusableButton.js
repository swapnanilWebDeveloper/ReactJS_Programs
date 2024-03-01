import React from 'react'

export default function ReusableButton({message,onClick}) {

  return (
    <button onClick={onClick}>{message}</button>
  )
}
