import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
           <ul>
              <li> 
                 <Link to="/student_page">Student Data</Link>
              </li>

              <li> 
                 <Link to="/mobile_page">Mobile Data</Link>
              </li>

              <li> 
                 <Link to="/laptop_page">laptop Data</Link>
              </li>
           </ul>
        </nav>
    </div>
  )
}

export default Navbar
