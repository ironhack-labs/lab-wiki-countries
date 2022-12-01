import React from 'react';
// import { Link } from "react-router-dom";
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const CountryDetails = ({ countries }) => {
  const { id } = useParams();
  const [countryDetail, setCountryDetail] = useState();
  console.log('projectId -->here ', id);
  console.log('countryDetail:', countryDetail);
  console.log(`https://ih-countries-api.herokuapp.com/countries/${id}`);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
      .then((response) => {
        console.log('response.data:', response.data);
        setCountryDetail(response.data);
      });
  }, [id]);

  function handleBorder(elm) {
    const borderCountry = countries.find((borderCountry) => {
      return borderCountry.alpha3Code === elm;
    });
    console.log('borrdeerrr', borderCountry);
    return borderCountry.name.common;
  }

  return (
    <>
      {countryDetail && (
        <div className="col-7">
          <h1>{countryDetail.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetail.alpha2Code.toLowerCase()}.png`}
                    alt="img"
                  />
                </td>
              </tr>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{countryDetail.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {countryDetail.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {countryDetail.borders.map((elm, i) => {
                      return (
                        <li key={i}>
                          <Link to={`/${elm}`}>{handleBorder(elm)}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default CountryDetails;
