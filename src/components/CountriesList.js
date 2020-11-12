import React  from 'react'
import countries from '../countries.json'
import { Link, NavLink } from 'react-router-dom';
// import CountryDetails from "./components/CountryDetails"

const CountriesList = () => {
    return (
        <div>
            
    <div>
      <h2>Projects:</h2>
      {countries.map((eachCountry, index) => {
        return (
          <div key={eachCountry.cca3}>
            <h3><Link to={`/countryDetails/${eachCountry.cca3}`}>{eachCountry.cca3}</Link></h3>

            <h4>{eachCountry.technologies}</h4>
            <hr />
          </div>
        );
      })}
    </div>
  );


        </div>
    )
}

export default CountriesList

