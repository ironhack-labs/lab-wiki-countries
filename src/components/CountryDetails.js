
import { NavLink,useParams } from "react-router-dom";


const CountryDetails=({countries})=>{
  const {countryId} = useParams()
  const countryDetail = countries.find(country=> country.alpha3Code == countryId )


  return(
    <>
      <h2>{countryDetail.name.common}</h2>
      <h6>Capital : {countryDetail.capital[0]}</h6>
      <p>Area : {countryDetail.area} km<sup>2</sup> </p>
      <ul>Border : {countryDetail.borders.length>0 ? 
        countryDetail.borders.map(bord=><li><NavLink to={`/${bord}`}>{bord}</NavLink></li>) :
        ''
      } </ul>


    </>
  )
}

export default CountryDetails;