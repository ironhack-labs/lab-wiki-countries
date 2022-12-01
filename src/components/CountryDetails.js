import React from 'react';
// import { Link } from "react-router-dom";
import { useParams, Link } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  const { id } = useParams();
  console.log('projectId -->here ', id);

  const foundCountry = countries.find((oneCountry) => {
    //  <== ADD
    return oneCountry.alpha3Code === id;
  });

  console.log('foundCountry ->countries', { foundCountry });

  function handleBorder(elm) {
    const borderCountry = countries.find((borderCountry) => {
      return borderCountry.alpha3Code === elm;
    });
    console.log('borrdeerrr', borderCountry);
    return borderCountry.name.common;
  }

  return (
    <>
      {' '}
      {foundCountry && (
        <div className="col-7">
          <h1>{foundCountry.name.common}</h1>
          <table className="table">
            <thead>
               
            </thead>
            <tbody>
            <tr>
                    <td><img src={`https://flagpedia.net/data/flags/icon/72x54/${(foundCountry.alpha2Code).toLowerCase()}.png`} alt="img" /></td>
                </tr>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{foundCountry.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {foundCountry.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {foundCountry.borders.map((elm, i) => {
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
