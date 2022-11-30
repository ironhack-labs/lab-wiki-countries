// import countriesInfo from "../../countries.json"
import {useState} from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

const CountryDetails= (props) => {
    const countriesInfo = props.country
    const [country, SetCountries]=  useState(countriesInfo)
    const {country_id} = useParams()

    const foundCountry = country.find(elm => elm.alpha3Code === country_id)
    

  const findBorderCountries = (borders) =>
    borders.map((border, idx) => {
      return (
        <>
         <p><Link to={`/${border}`} key={idx}>
           {border}
          </Link> </p> 
        </>
      );
    });

    

    return (
        <>
        <div className="col-7 country-detail-box">
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} width="250px" alt="" />
            <h1> {foundCountry.name.official}</h1>
            <hr />
            <p> Capital: {foundCountry.capital}</p>
            <p> Area: {foundCountry.area} km²</p>
            <div className="borders">
            <ul>{findBorderCountries(foundCountry.borders)}</ul>
          </div>
            

            
        </div>
        </>
    )


}

export default CountryDetails

