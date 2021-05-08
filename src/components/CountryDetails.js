import React from 'react';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const { countries } = props;

  const getCountry = (id) => {
    return countries.find((country) => country.alpha3Code === id);
  };

  const foundedCountry = getCountry(props.match.params.id);
  console.log(foundedCountry);

  let borders;
  if (foundedCountry.borders.length !== 0) {
    borders = foundedCountry.borders.map((country) => {
      let borderCountry = countries.find(
        (border) => border.alpha3Code === country
      );
      return (
        <p key={borderCountry.alpha3Code}>
          <Link to={`/${country}`}>{borderCountry.name}</Link>
        </p>
      );
    });
  } else {
    borders = <p>No borders</p>;
  }

  const displayDetails = () => {
    return (
      <div>
        <h1>{foundedCountry.name}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{foundedCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {foundedCountry.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>{borders}</ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return displayDetails();
};

export default CountryDetails;
