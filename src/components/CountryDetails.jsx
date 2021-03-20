import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const CountryDetails = (props) => {
  const { params } = props.match;

  const getCountry = (id) => {
    let pais;
    countries.forEach(country => {
      if (country.cca3 === id) {
        pais = country
      }
    })
    return pais
  };

  const country = getCountry(params.id);

  const getBorder = (border)=>{
    return countries.find(country=>border===country.cca3).name.common;
  }



  return (
    <>
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width:'30%'}}>{}</td>
            <td>{country.capital.length<=0?'Sem Capital':country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map(border=>{
                  return (<li key={border}><Link to={`/country/${border}`}>{getBorder(border)}</Link></li>)
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CountryDetails;
