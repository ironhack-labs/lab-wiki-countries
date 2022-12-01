import countries from '../countries.json'
import React from "react";
import { Link, useParams } from "react-router-dom";




const CountryDetails = () => {
    const { countryId } = useParams();
    const foundCountry = countries.find((singleCountry) => {
      return singleCountry.alpha3Code === countryId;
    });
    foundCountry && console.log(foundCountry);
    return (
      <div>
      
        <Link to={`${foundCountry.alpha3Code}`} >
        <img src = {`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}/>
         <h3>{foundCountry.name.common}</h3>
         <h4>{foundCountry.alpha3Code}</h4>
        <h5>{foundCountry.alpha2Code}</h5>
    

        </Link>
      </div>
    );
}

export default CountryDetails;