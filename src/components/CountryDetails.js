import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom"
import countries from "../countries.json"


const CountryDetails = ({country}) => {

  const [findCountry, setFindCountry] = useState(null)

  const { countryId } = useParams()
  console.log("Country Code", countryId)


  useEffect(() => {  
  const countrie = countries.find((countrieObj) => {
    return countrieObj.alpha3Code === countryId
  })

    if(countrie) {
      setFindCountry(countrie)
    }

   }, [countryId])


      return (
        <div>CountryDetails

        {!findCountry && <h3>Country Not found</h3>}

        {findCountry && (
          <>
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${findCountry.alpha2Code.toLowerCase()}.png`} />
            <h2>{findCountry.name.common}</h2>
            <h2>{findCountry.capital}</h2>
            <h2>{findCountry.area}</h2>
            <ul>
              <h2>{findCountry.borders}</h2>
            </ul>
          </>
        ) }

        </div>
      )
    }

    export default CountryDetails