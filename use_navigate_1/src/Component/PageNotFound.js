import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div>
        <h3>404 error!!!</h3>
        <h3>Page not found !!</h3>
        <Link to="/home">return to home</Link>
    </div>
  )
}

export default PageNotFound
