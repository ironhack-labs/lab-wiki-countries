import React from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json";

const CountryDetails = props => {
  
    const countryCode = props.match.params.country;
  
  const country = countries.find(index => index.cca3 === countryCode);

 let borders
 if (country.borders.length === 0){
     borders = "This country does not have a border with any other countries"
 } else {
     borders = (
        <ul>
         {country.borders.map((borderingCountry)=> <li>
     <Link to={`/${borderingCountry}`} >{borderingCountry}</Link>
    </li>)}
        </ul>
    )
 }
  
  return (
    <div className="w-100">
      <h3>{country.name.official}</h3>
      <table className="text-left">
      <tbody>
        <tr >
          <td className="font-weight-bold py-3 pr-3">Capital</td>
          <td className="py-3">{country.capital[0]}{country.capital[1]}</td>
        </tr>
        <tr>
          <td className="font-weight-bold py-3 pr-3">Area</td>
          <td className="py-3">{country.area} km²</td>
          </tr>
        <tr>
          <td className="font-weight-bold align-text-top py-3 pr-3">Borders</td>
          <td className="py-3">
{borders}
         </td>
        </tr>
      </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;