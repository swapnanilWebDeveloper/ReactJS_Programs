import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <li>
               <Link to="/home">Home</Link>
            </li>
            <li>
               <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/geturl">get URL params</Link>
            </li>
        </nav>
    </div>
  )
}

export default Navbar
