import countriesData from './../countries.json';

// imports data from a JSON file named "countries.json" which contains information about countries.

import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

// import some required modules from various libraries such as "react-router-dom" and "axios".

function getCountryName(code) {
  const oneCountry = countriesData.find((oneCountry) => {
    return oneCountry.alpha3Code === code;
  });

  return oneCountry.name.common;
}

// function that takes a country code and returns the name of the country by searching through the "countriesData" array.

function CountryDetails(props) {
  const { countries } = props;
  const { countryId } = useParams();

  const [foundCountry, setFoundCountry] = useState(null);


  // With API
  // functional component that takes "countries" as a prop and extracts the "countryId" from the URL parameters. It also initializes a "foundCountry" state variable to null.

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries/' + countryId
      );

      setFoundCountry(response.data);
    };

    fetchData();
  }, [countryId]);

  // checks whether "foundCountry" is null and, if so, returns a loading message.

  if (!foundCountry) {
    return <p className="col-7"> Loading... </p>;
  }

  // renders the details of the country, including its flag, name, capital, area, and borders. It uses the "foundCountry" state variable to access the relevant data and also calls the "getCountryName" function to get the name of each bordering country.

  return (
    <div className="col-7">
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
        alt={`flag-of-${foundCountry.name.common}`}
        style={{ width: '100px' }}
      />
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{foundCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map((alpha3, i) => {
                  return (
                    <li key={i}>
                      <Link to={'/' + alpha3}>{getCountryName(alpha3)}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;