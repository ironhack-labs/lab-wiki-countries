import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetails = (props) => {
  const { countries } = props;
  const countryParam = useParams().id;
  const [countryInfo, setCountryInfo] = useState({});

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryParam}`)
      .then((res) => setCountryInfo(res.data))
      .catch((err) => console.log(err));
  }, [countryParam]);

  const getCountryName = (code) => {
    const countryName = countries.filter((country) => {
      return code === country.alpha3Code;
    });
    return countryName[0].name.common;
  };

  return (
    <div className="col-7">
      {countryInfo && (
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${countryInfo?.alpha2Code?.toLowerCase()}.png/`}
          alt={countryInfo?.name?.common}
        />
      )}
      <h1>{countryInfo?.name?.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{countryInfo?.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryInfo?.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {countryInfo?.borders?.map((border) => {
                  return (
                    <li key={border}>
                      <Link to={`/${border}`}>{getCountryName(border)}</Link>
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
};

export default CountryDetails;
