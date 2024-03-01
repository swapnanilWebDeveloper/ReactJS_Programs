import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
      <h3>logo</h3>
        <ul>
          <li>
            <NavLink
               to="/home" style={({isActive}) => {return {backgroundColor : isActive ? "green" : "transparent"}}}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" style={({isActive}) => {return {backgroundColor : isActive ? "yellow" : "transparent"}}}>About</NavLink>
          </li>
          <li>
            <NavLink to="/service" style={({isActive}) => {return {backgroundColor : isActive ? 
                                                                      "blue" : "transparent",
                                                                    color : "white" }}}>Service</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
