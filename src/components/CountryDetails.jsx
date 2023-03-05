import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

function CountryDetails(props) {
const [resultado, setResultado]= useState([])
  const {countriesData}=props
  const {alpha3Code}=useParams();

const {name}=resultado;

const filtro=()=>{
  const countryFilter=countriesData.filter(country=>{
   return country.alpha3Code===alpha3Code;
  })

setResultado(countryFilter)
}

useEffect(()=>{
  filtro()
},[alpha3Code])

  return (
    <div>
   <h1>{name.official}</h1>
    </div>
  )
}

export default CountryDetails