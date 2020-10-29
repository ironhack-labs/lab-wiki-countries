import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

import './styles/CountriesList.css';

const CountriesList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://countries.tech-savvy.tech/countries')
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  return (
    <div className="countriesList__container">
      <ListGroup as="ul">
        {countries.map((country) => {
          return (
            <ListGroup.Item as="li" key={country.cca3}>
              <NavLink
                to={`/country/${country.cca3}`}
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'red',
                }}
              >
                {country.flag} {country.name.common}
              </NavLink>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default CountriesList;
