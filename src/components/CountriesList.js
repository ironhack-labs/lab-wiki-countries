/*
 * Countries List.
 */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Spinner, Card, ListGroup } from 'react-bootstrap';
import './CountriesList.css';

function CountriesList() {
  const [countries, setCountries] = useState([]);

  // componentDidMount.
  useEffect(() => {
    axios.get('https://countries.tech-savvy.tech/countries').then((res) => {
      setCountries(res.data);
    });
  }, []);

  // Loading spinner.
  if (!countries.length) {
    return (
      <Spinner animation="border" role="status" variant="light">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  return (
    <Card border="info" className="myCountriesList">
      <ListGroup variant="flush">
        {countries.map((country) => {
          return (
            <Link to={`/${country.cca3}`}>
              <ListGroup.Item>
                <img
                  src={`https://www.countryflags.io/${country.cca2}/flat/16.png`}
                />{' '}
                {country.name.common}
              </ListGroup.Item>
            </Link>
          );
        })}
      </ListGroup>
    </Card>
  );
}

export default CountriesList;
