import React from 'react';
import countriesJSON from '../countries.json';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const countryArray = [...countriesJSON];

  const countryID = props.match.params.id; //save the id as variable

  const Chosencountry = countryArray.find(
    // find the country in the array with cca3 corresponding to the countryID
    (country) => country.cca3 === countryID
  );
  console.log('props:', props);

  return (
    // <div>
    // <p>{`id: ${props.match.params.id}`}</p>
    // </div>
    <div>
      <h1>{Chosencountry.name.common}</h1>
      <p>Capital: {Chosencountry.capital}</p>
      <p>
        Area: {Chosencountry.area} km<sup>2</sup>
      </p>
      {Chosencountry.borders.map((border, index) => {
        // make the map for the array borders to display each one
        const matchCountry = countryArray.find(
          // made a match between cca3 of each country and the border
          (country) => country.cca3 === border
        );
        return (
          <li key={matchCountry.cca3}>
            <Link to={`/${matchCountry.cca3}`}>{matchCountry.name.common}</Link>
          </li>
        );
        // display the common name of the variable matchcountry in which border code is equal to cca3 and create a link to get to the page of that country
      })}
    </div>
  );
};

export default CountryDetails;
