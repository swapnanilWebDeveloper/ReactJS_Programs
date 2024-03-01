import React from 'react'
import {Link} from "react-router-dom";

function Nabvar() {
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
               <Link to="/filter">Filter</Link>
            </li>
            <li>
               <Link to="/contact">Contact</Link>
            </li>
        </nav>
    </div>
  )
}

export default Nabvar
