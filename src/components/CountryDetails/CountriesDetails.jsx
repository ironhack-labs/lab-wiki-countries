import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

import './CountriesDetails.css';

function CountriesDetails({ countries }) {
  const { countryId } = useParams();
  const countryApi = `https://ih-countries-api.herokuapp.com/countries/${countryId}`;

  const [countryInfo, setCountryInfo] = useState();

  useEffect(() => {
    axios
      .get(countryApi)
      .then((response) => {
        setCountryInfo(response.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [countryApi]);

  const getCountryByAlpha3 = (code) =>
    countries.find((elm) => elm.alpha3Code === code);

  const findBorderCountries = (borders) =>
    borders.map((border, idx) => {
      const borderedCountry = getCountryByAlpha3(border);
      return (
        <li key={idx}>
          <Link to={`/${borderedCountry.alpha3Code}`}>
            {borderedCountry.name.common}
          </Link>
        </li>
      );
    });

  return (
    <div className="countriesDetails col-6 align-self-center">
      {countryInfo ? (
        <>
          <div className="text-center" id={countryInfo._id}>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${countryInfo.alpha2Code.toLowerCase()}.png`}
              alt={countryInfo.name.official}
            />
            <h3 className="mt-5">{countryInfo.name.official}</h3>
          </div>
          <div className="countryInfo mt-5">
            <div>
              <p>Capital</p>
              <p>{countryInfo.capital}</p>
            </div>
            <hr />
            <div>
              <p>Area</p>
              <p>
                {countryInfo.area} km<sup>2</sup>
              </p>
            </div>
            <hr />
            <div>
              <p>Borders</p>
              <div className="borders">
                <ul>{findBorderCountries(countryInfo.borders)}</ul>
              </div>
            </div>
            <hr />
          </div>
        </>
      ) : (
        <h1>Country information not available ATM</h1>
      )}
    </div>
  );
}

export default CountriesDetails;
