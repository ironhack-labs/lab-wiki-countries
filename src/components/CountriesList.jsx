import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function CountriesList() {
  const [country, setCountry] = useState([]);

  const getCountries = async () => {
    try {
      let response = await axios.get(
        ` https://ih-countries-api.herokuapp.com/countries`
      );
      setCountry(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      {country.map((data) => {
        let countryCode = data.alpha2Code.toLowerCase();
        return (
          <ul className="list-group">
            <Link
              to={`/countries/${data.alpha3Code}`}
              className="list-group-item list-group-item-info"
            >
              {' '}
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${countryCode}.png`}
                alt=""
              />{' '}
              {data.name.official}
            </Link>
          </ul>
        );
      })}
    </div>
  );
}
export default CountriesList;
