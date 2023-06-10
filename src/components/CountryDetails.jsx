import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CountryDetails({countries}) {
  const {id} = useParams()
  const [oneCountry, setOneCountry] =useState(null);
  console.log("country id", id)
  //let country = countries.find((country) => country.alpha3Code === id )
  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`);
        setOneCountry(response.data);
      } catch (error) {
        console.log('Error fetching country data:', error);
      }
    };

    fetchCountryData();
  }, [id]);
  console.log("this is countryDetails",oneCountry)
  if(!oneCountry){
    return <div>
      Country not found!
    </div>
  }
  //console.log(country);
  return (
    <div>
    <h1>{oneCountry.name.common}</h1>
    <p>{oneCountry.name.official}</p>
   <p>Region: {oneCountry.region}</p>
      <p>Subregion: {oneCountry.subregion}</p>
      <p>Capital: {oneCountry.capital}</p>
      <p>Languages: {Object.values(oneCountry.languages).join(', ')}</p>
      <p>Area: {oneCountry.area} square kilometers</p>

    </div>
  ) 
}

export default CountryDetails;
