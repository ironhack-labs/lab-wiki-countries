import React from "react";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";

function HomePage({ handleCountrySelected }) {
const [countries, setCountries] = useState([])
useEffect((country) => {//receive a function an array empty when the component is mount
  console.log("mount")
  axios.get("https://ih-countries-api.herokuapp.com/countries ")
    .then(res => {
      setCountries(res.data)
    })

  return()=> {//when component unmount
    console.log("unmount")
  }

}, []);

if (countries.length === 0) {
  return(
    <div>Loading.......</div>
  )
  
} else {
  return(
    <>
      <h2>WikiCountries: Tu Guía para el Mundo</h2>
      <div className="container" style={{ maxHeight: "90vh", overflow: "scroll" }}>
        <h1 style={{ fontSize: "24px" }}>WikiCountries: Tu Guía para el Mundo</h1>

        {countries.map((country) => (
  
          <div className="list-group" key={country._id}>
            
            
            <Link className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`} name={country.name.official} onClick={() => handleCountrySelected(country)}>
              {country.name.common} 
              {console.log(country.alpha2Code.toLowerCase())}
              <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" srcset="" />

            </Link>
          </div>
          
        ))}
      </div>
    </>
    
  )

}

}

export default HomePage;


