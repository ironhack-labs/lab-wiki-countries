
import { NavLink, useParams } from "react-router-dom";
import { useState,useEffect } from 'react'; 


const CountryDetails = ({ countries }) => {

  const { countryId } = useParams()



  const countryDetail = countries.find(country => country.alpha3Code == countryId)



  return (
    
    <div className="CountryDetails">
    {countryDetail && 
    <>
      <br/>
      <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetail.alpha2Code.toLowerCase()}.png`} />
      <h2>{countryDetail.name.common}</h2>
      <h6>Capital : {countryDetail.capital[0]}</h6>
      <p>Area : {countryDetail.area} km<sup>2</sup> </p>
      <ul>Border : {countryDetail.borders.length > 0 ?
        countryDetail.borders.map(bord => <p><NavLink to={`/${bord}`}>{bord}</NavLink></p>) :
        ''
      } </ul>
      </>
    }
    </div>
  )
}

export default CountryDetails;