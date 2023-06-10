import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CountryDetails() {
  const { id } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
      .then((response) => {
        setCountry(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <h1>{country.name}</h1>
      <table className="table">
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{country.area}</td>
          </tr>
          <tr>
            <td>Population</td>
            <td>{country.population}</td>
          </tr>
          <tr>
            <td>Currencies</td>
            <td>{country.currencies.map((currency) => currency.name)}</td>
          </tr>
          <tr>
            <td>Languages</td>
            <td>{country.languages.map((language) => language.name)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
