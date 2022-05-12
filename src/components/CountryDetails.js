
import { NavLink, useParams } from "react-router-dom";
import { useState,useEffect } from 'react'; 


const CountryDetails = ({ countries }) => {
  const [countrydet, setCountrydet] = useState(null)
  const { countryId } = useParams()
useEffect(() => {
  const countryDetail = countries.find(country => country.alpha3Code == countryId)
  countryDetail && setCountrydet(countryDetail);
}, [countryId])


  


  return (
    <div className="CountryDetails">
    {countrydet && 
    <>
      <br/>
      <img src={`https://flagpedia.net/data/flags/icon/72x54/${countrydet.alpha2Code.toLowerCase()}.png`} />
      <h2>{countrydet.name.common}</h2>
      <h6>Capital : {countrydet.capital[0]}</h6>
      <p>Area : {countrydet.area} km<sup>2</sup> </p>
      <ul>Border : {countrydet.borders.length > 0 ?
        countrydet.borders.map(bord => <p><NavLink to={`/${bord}`}>{bord}</NavLink></p>) :
        ''
      } </ul>
      </>
    }
    


    </div>
  )
}

export default CountryDetails;