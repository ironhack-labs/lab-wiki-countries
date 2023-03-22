import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import countries from '../countries.json';


function CountryDetails(props) {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    setCountry(props.countries);
  }, [props.countries]);

  return (
    <div>
      <h2>Countries</h2>
      {countries.map((country) => {
        return (
          <div key={country.name} className="country">
            <h1>
              <Link to={`/countries/${country.alpha3Code}`}>{country.name.common}</Link>
            </h1>
            <table class="table">
        <thead></thead>
         <tbody>
         <tr>
      <td style={{ width: '30%' }}>Capital</td>
      <td>{country.capital}</td>
      </tr>
     <tr>
      <td>Area</td>
      <td>
        {country.area}m
        <sup>2</sup>
      </td>
      </tr>
      <tr>
      <td>Borders</td>
      <td>
        <ul>
        <Link to={`/countries/${country.borders.map}`}>{country.borders.map}</Link>
        <li>{country.borders.map}</li> 
        </ul>
      </td>
      </tr>
      </tbody>
      </table>
    
     </div>
      );
    })}
      </div>
 );
}
export default CountryDetails;
