import React from 'react'
import { useSearchParams } from 'react-router-dom'

function GetURLParams() {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("name"));
    console.log(searchParams.get("city"));
    console.log(searchParams.get("country"));

    let myName = searchParams.get("name");
    let myCity = searchParams.get("city");
    let myCountry = searchParams.get("country");

  return (
    <div>
        <h3>Get URL params.....</h3>
        <h3>name is : {myName}</h3>
        <h3>city is : {myCity}</h3>
        <h3>country is : {myCountry}</h3>

        <button onClick={() => setSearchParams({
            name : "Bhaskar Gupta", 
            city : "Ranaghat",
            country : "America"})}>
           Update URL params Value</button>
        
        <input type="text" onChange={(e) => setSearchParams({job : e.target.value})} 
           placeholder="set more URL param value"/>
    </div>
  )
}

export default GetURLParams
