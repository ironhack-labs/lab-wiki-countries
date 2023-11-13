import React from 'react'
import { NavLink } from 'react-router-dom'

function HomePage({countries}) {
 console.log(countries)
  return (
   <>
    {countries && <h2>Number of characters: {countries.length}</h2>}
    <div className="container" style={{maxHeight: "90vh", overFlow: "scroll"}}>
        <h1 style={{fontSize: "24px"}}>WikiCountries: Your Guide to the World</h1>
   {
    countries === null
    ?<p>Loading....</p>
    :countries.length && countries.map((country,index)=>{
      return(
        <div className="list-group"  key={country._id}>
        <NavLink className="list-group-item list-group-item-action" to={`/country/${country.alpha3Code}`}>
          {country.name.common}
        </NavLink>
        </div>
      )
      
   
    })
     
   } 
   </div>
    </>
  )
}

export default HomePage

