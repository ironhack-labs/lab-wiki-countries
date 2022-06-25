import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({ imgUrl }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const { data } = await axios(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      setCountries(data);
    };

    getCountries();
  }, []);

  const listCountries = countries.map((country) => (
    <Link
      key={country.name.common}
      to={`/${country.alpha3Code}`}
      className="list-group-item list-group-item-action"
    >
      {
        <img
          src={`${imgUrl}${country.alpha2Code.toLowerCase()}.png`}
          alt="flag"
        />
      }
      {country.name.official}
    </Link>
  ));

  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: `90vh`, overflow: 'scroll' }}
          >
            <div className="list-group">{listCountries}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountriesList;
