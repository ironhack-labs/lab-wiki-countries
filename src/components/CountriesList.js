import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const CountriesList = () => {
  const [countries, setCountries] = useState([]);

  const getData = async () => {
    const { data } = await Axios.get(
      'https://countries.tech-savvy.tech/countries'
    );
    setCountries(data);
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className="list-group rounded-0" id="list-tab" role="tablist">
      {countries.map((country) => (
        <div key={country.ccn3} className="">
          <NavLink
            className="list-group-item list-group-item-action "
            id={`list-${country.cca3}-list`}
            data-toggle="list"
            to={`/country/${country.cca3}`}
            role="tab"
            aria-controls={country.cca3}
          >
            {country.flag} {country.name.common}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default CountriesList;
