import React from "react";
import { Link } from "react-router-dom";
import myCountries from "../countries.json";
import shortid from "shortid";

const getCountryById = id => {
  const result = myCountries.find(country => country.cca3 === id);

  return result;
};

export default function CountryDetail(props) {
  console.log(props.match.params);
  
  const { country } = props.match.params;

  const foundCountry = getCountryById(country);

  console.log("FOUNDCOUNTRY", foundCountry);

  return (
    <div className="CountryDetail">
      <h1>{foundCountry.name.common}</h1>
      <div>Capital {foundCountry.capital}</div>
      <div>Area {foundCountry.area}</div>
      <div>
        <h3>Borders</h3>
        <ul>
          {foundCountry.borders.map(countryCC3 => 
            <li key={shortid.generate()}><Link to={`/countrydetail/${getCountryById(countryCC3).cca3}`}>{getCountryById(countryCC3).name.common}</Link></li>
          )}
          {/*                     
                    foundCountry.borders.map(countryCC3=>
                    () */}
        </ul>
      </div>
    </div>
  );
}
