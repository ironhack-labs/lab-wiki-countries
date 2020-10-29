/*
 * Country Details.
 */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Spinner, Card, ListGroup } from 'react-bootstrap';
import './CountryDetails.css';

function CountryDetails(props) {
  const [country, setCountry] = useState({});

  const getCountry = () => {
    const countryCode = props.match.params.countryCode;

    axios.get(`https://countries.tech-savvy.tech/countries`).then((res) => {
      const countryInfo = res.data.filter((country) => {
        return country.cca3 === countryCode;
      });

      const { name, capital, area, borders, cca3, cca2 } = countryInfo[0];

      const countriesNames = res.data
        .map((country) => {
          return (country = {
            name: country.name.common,
            cca3: country.cca3,
          });
        })
        .filter((country) => {
          return borders.indexOf(country.cca3) >= 0;
        });

      const displayInfo = {
        name: name.common,
        capital: capital,
        area: area,
        borders: countriesNames,
        cca3: cca3,
        flag: `https://www.countryflags.io/${cca2}/flat/64.png`,
      };

      setCountry(displayInfo);
    });
  };

  // componentDidMount.
  useEffect(() => {
    getCountry();
  }, []);

  // componentDidUpdate.
  useEffect(() => {
    if (country.cca3 !== props.match.params.countryCode) {
      getCountry();
    }
  });

  // Loading spinner.
  if (!country.borders) {
    return (
      <Spinner animation="border" role="status" variant="light">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  return (
    <Card border="info" className="myCountryDetails">
      <Card.Header style={{ fontSize: '25px' }}>
        <img src={country.flag} />
        <b> {country.name}</b>
      </Card.Header>

      <ListGroup variant="flush">
        <ListGroup.Item>
          <b>Capital:</b> {country.capital}
        </ListGroup.Item>

        <ListGroup.Item>
          <b>Area:</b> {country.area} km²
        </ListGroup.Item>

        <ListGroup.Item>
          <b>Borders:</b>
          <br></br>
          <br></br>
          <ul>
            {country.borders.map((neighbour) => {
              return (
                <Link to={`/${neighbour.cca3}`}>
                  <p>{neighbour.name}</p>
                </Link>
              );
            })}
          </ul>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CountryDetails;
