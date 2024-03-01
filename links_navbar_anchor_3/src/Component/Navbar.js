import React from 'react'
import { Link }  from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <ul>
               <li>
                { /* <a href="/home" >Home</a>  */}
                <Link to="/home">Home</Link>  
               </li>

               <li>
                { /* <a href="/about" >About</a>  */} 
                <Link to="/about">About</Link>
               </li>

               <li>
                { /* <a href="/service" > Service</a>  */}
                <Link to="/service">Service</Link> 
               </li>
            </ul>
  </nav>  
    </div>
  )
}

export default Navbar
