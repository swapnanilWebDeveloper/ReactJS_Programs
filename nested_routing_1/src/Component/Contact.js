import React from 'react'
import {Link, Outlet} from "react-router-dom";

function Contact() {
  return (
    <div>
        <h3>Contact us page....</h3>
        <h3>Here we have some other businesses</h3>
        <Link to="channel">Channel</Link>
        <Link to="company">Company</Link>
        <Link to="other">Other</Link>
        <Outlet />
    </div>
  )
}

export default Contact
