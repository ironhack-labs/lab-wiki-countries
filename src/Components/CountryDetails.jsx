import React from 'react';
import countriesJSON from "../countries.json";
import { Link } from "react-router-dom";

const CountryDetails = (props) => {
    const countryID = props.match.params.cca3;
  console.log("HHHH3Y", props)
    const foundCountry = countriesJSON.find((country) => country.cca3 === countryID);

    console.log("BORDERS",foundCountry.borders)

    // const countryCode = props.match.params.borders;
    // const foundCountryCode = countriesJSON.find((countryCode) => countryCode.borders === countryCode);
    // console.log(countryCode)

    const foundCountryBorders = foundCountry.borders;
    console.log(foundCountryBorders)
    
    return (
      <div>
        <p>{foundCountry.name.common}</p>
        <p>Capital {foundCountry.capital}</p>
        <p>Area {foundCountry.area} km²</p>
        <div>
            <p>Borders</p>
            <ul>
      {foundCountryBorders.map((border) => {
        const borderMatch = countriesJSON.find((country) => country.cca3 === border);
        return <li><Link to={`/countries/${borderMatch.cca3}`}>{borderMatch.name.common}</Link></li>
        }
        //   <div key={country.cca3}>
        //     <Link to={`/countries/${country.cca3}`}>{country.name.common}</Link>
        //   </div>
        )}
        </ul>
      </div>
      </div>
    );
  };
  
  export default CountryDetails;