import React from 'react'
import {useNavigate} from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  // example 2
  const handleDynamicNavigation = (targetRoute) => {
    navigate(targetRoute);
    console.log(targetRoute);
  }

  //example 3
  const handleConditionalNavigation = (shouldNavigate) => {
      if(shouldNavigate){
        navigate("/about");
      }
      else{
        navigate("/service");
      }
  }
  return (
    <div>
       <h3>Home page is for introduction...</h3>
       {/* emaxple 1 */}
       {/* <button onClick={() => navigate("/about")}>Go to about page</button>
       <br />
       <button onClick={() => navigate("/service")}>Go to service page</button>
       <br />
       <button onClick={() => navigate("/geturl")}>Go to get url params page</button> */}

       {/* example 2 */}
      {/* <button onClick={() => handleDynamicNavigation("/about")}>Go to about page</button>
       <br />
       <button onClick={() => handleDynamicNavigation("/service")}>Go to service page</button>
       <br />
      <button onClick={() => handleDynamicNavigation("/geturl")}>Go to get url params page</button> */}

      {/* example 3 */}
      <button onClick={() => handleConditionalNavigation(true)}>Go to about page</button>
      <br />
      <button onClick={() => handleConditionalNavigation(false)}>Go to service page</button>
    </div>
  )
}

export default Home
