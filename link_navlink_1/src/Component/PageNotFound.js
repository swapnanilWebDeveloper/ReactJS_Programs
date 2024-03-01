import React from 'react'
import {Link} from "react-router-dom";

function PageNotFound() {
  return (
    <div>
         <h4>404 error !!!</h4>
         <h4>Page not found..</h4>
         <Link to="/home">return to home</Link>
    </div>
  )
}

export default PageNotFound
