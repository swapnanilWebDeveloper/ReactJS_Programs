import React from 'react'

export default function ReusableList({outdoor_games}) {
  return (
    <ul>
        {
            outdoor_games.map((val,ind) => (
                 <li key={ind}>{val}</li>
            ))
        }
    </ul>
  )
}
