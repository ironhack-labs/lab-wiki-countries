import React from 'react'
// import countries from "../countries.json"
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function CountryDetails(props) {
  const [foundCountry, setFoundCountry] = useState(null);

//STATIC DATA VERSION
//   const {alpha3Code} = useParams()

// useEffect(() => {
// const country = props.countries.find((countryObj) => {
//   return countryObj.alpha3Code === alpha3Code
// })
//     if(country) {
//       setFoundCountry(country);
//     }

// }, [alpha3Code])

//START - AXIOS VERSION
const { alpha3Code} = useParams();
console.log('alpha3Code', alpha3Code);  
// SOMETHING ABOUT USING THIS IN THE LIST PAGE 
//make state foundCountry(countries), setFoundCountry in the list page -- MABYE IT SHOULD BE IN APP JS?
//but alpha code isn't needed cause we're getting all the countries
//then fou
useEffect(() => {
  // Get the project by id from the server
  axios.get('https://ih-countries-api.herokuapp.com/countries/' + alpha3Code)
    .then((response) => {
      setFoundCountry(response.data);
    })
  
}, [alpha3Code]);

//END - AXIOS VERSION 
  return (
    <div className="countryDetailsPage">

       <h1 className="countDetsTitle">COUNTRY DETAILS</h1>
     {!foundCountry && <h3>Country not found</h3>}


{foundCountry && (


  <div className="countryDetailsBox">
   <p>{alpha3Code}</p>
   <p>{foundCountry.name.common}</p>
   {console.log(foundCountry.name)}
  </div>

)}

     



        

       <Link to="/countriesList">Back</Link>





    </div> 



   
  )
}
