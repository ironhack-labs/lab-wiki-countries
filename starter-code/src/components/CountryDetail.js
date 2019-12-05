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
      <h1 className='countryName'>{foundCountry.name.common}</h1>
      <div className="details"><p>Capital</p> {foundCountry.capital}</div>
      <div className="details"><p>Area</p> {foundCountry.area}</div>
      <div className="borderDetails">
        <p>Borders</p>
        <ul>
          {foundCountry.borders.map(countryCC3 => 
            <li className="listItem" key={shortid.generate()}><Link to={`/countrydetail/${getCountryById(countryCC3).cca3}`}>{getCountryById(countryCC3).name.common}</Link></li>
          )}
          {/*                     
                    foundCountry.borders.map(countryCC3=>
                    () */}
        </ul>
      </div>
    </div>
  );
}
