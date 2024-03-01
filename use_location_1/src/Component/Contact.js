import React from 'react'
import {Link, Outlet, useLocation} from "react-router-dom";

function Contact() {
  //example 1 
  const location = useLocation();
  console.log(location);
  console.log(location.pathname);
  console.log(location.state);
   console.log(location.state["name"]);
  console.log(location.state["owner"]);   
  return (
    <div>
        <h3>Contact us page....</h3>
        <h3>Here we have some other businesses</h3>
        <Link to="channel" state={{name: "Youtube" , owner : "Bhaskar Gupta"}}>
        Channel</Link>
        <Link to="company">Company</Link>
        <Link to="other">Other</Link>
        <Outlet />
    </div>
  )
}

export default Contact
