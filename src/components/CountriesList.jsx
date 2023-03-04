import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const apiURL = ' https://ih-countries-api.herokuapp.com/countries';

function CountriesList(props) {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        setCountryList(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <div class="container">
      <div class="row">
        <div class="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
          <div class="list-group">
            {countryList.map((country) => {
              return (
                <Link
                  key={country.alpha3Code}
                  to={`/country/${country.alpha3Code}`}
                  class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                >
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    alt={country.name.official}
                  />
                  <p class="mb-0">{country.name.official}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
