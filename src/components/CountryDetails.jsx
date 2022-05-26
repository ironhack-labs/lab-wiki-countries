import React from 'react'
import countries from '../countries.json'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';   
import axios from 'axios'

function CountryDetails(props) {

const [foundCountries, setFoundCountries] = useState([]);
 const { countryId } = useParams();


  
 
   useEffect(() => {   
    axios
    .get('https://ih-countries-api.herokuapp.com/countries/' + countryId)
    .then((response) => {
        console.log(response.data)
        setFoundCountries(response.data);
    })
    .catch((er) => console.log(er))
  
}, []);  
     

  return (
    <div>
    <h1>CountryDetails</h1>
     {!foundCountries && <h3>Country not found!</h3>}

    {foundCountries && (
        <>
           {/*    <h2>{foundCountries.altSpellings[1]}</h2>  */}
             <h3>{foundCountries.capital}</h3> 
           <p>{foundCountries.capital}</p>
          <Link to="/countrylist">Back</Link> 
        </>
      )} 
    </div>
  )
}

export default CountryDetails