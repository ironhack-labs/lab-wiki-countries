import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

import './styles/CountryDetail.css';

const CountryDetails = (props) => {
  const [country, setCountry] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [borders, setBorders] = useState([]);

  const getCountry = () => {
    let countryId = props.match.params.countryId;
    axios
      .get(`https://countries.tech-savvy.tech/countries/${countryId}`)
      .then((response) => {
        let filteredData = response.data.filter((country) => {
          return country.cca3 == countryId;
        });

        if (filteredData.length) {
          let country = {
            name: filteredData[0].name.common,
            capital: filteredData[0].capital,
            borders: filteredData[0].borders,
            area: filteredData[0].area,
            flag: filteredData[0].flag,
            id: countryId,
          };
          setCountry(country);
          setToggle(true);

          axios
            .get('https://countries.tech-savvy.tech/countries')
            .then((response) => {
              let converted = [];
              if (country && country.borders) {
                for (let i = 0; i < response.data.length; i++) {
                  country.borders.forEach((country) => {
                    if (country == response.data[i].cca3) {
                      converted.push(response.data[i].name.common);
                    }
                  });
                }
                setBorders(converted);
              }
            });
        } else {
          setToggle(false);
        }
      });
  };

  //ComponentDidMount
  useEffect(() => {
    getCountry();
  }, []);

  //ComponentDidUpdate
  useEffect(() => {
    if (props.match.params.countryId !== country.id) {
      getCountry();
    }
  });

  return (
    <div>
      {!toggle ? (
        <h1>No data available</h1>
      ) : (
        <div>
          <div className="countryDetail__container">
            <h2>{country.name}</h2>
          </div>
          <div className="countryDetail__container">
            <p>Capital</p>
            <p>{country.capital}</p>
          </div>
          <div className="countryDetail__container">
            <p>Area</p>
            <p>{country.area}</p>
          </div>

          <div className="countryDetail__container">
            <p>Borders</p>
            <ul>
              {!borders ? (
                <li>No border</li>
              ) : (
                borders.map((border, i) => {
                  return <li key={i}>{border}</li>;
                })
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
