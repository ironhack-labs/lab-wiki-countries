import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

function CountriesList() {

    const [countries, setCountries] = useState([])


    useEffect(()=>{

        axios.get("https://ih-countries-api.herokuapp.com/countries").then((countriesObj)=>{
            setCountries(countriesObj.data)
            console.log(countries)
        }) 
    },[])

  return (
    <>
    {countries.map((oneCountry)=>{
        return(
                <div className="countryDiv" key={uuid()}>
                    <Link to={`/${oneCountry.alpha3Code}`} className="countryLink">{oneCountry.name.common}</Link>
                </div>
        )
    })}
    </>
  )
}
export default CountriesList