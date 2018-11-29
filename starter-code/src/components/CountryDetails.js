import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const countryDetails = (props) => {

  const getCountry = (cca3) => {
    const theCountry = (oneCountry) => {
      return oneCountry.cca3 === cca3;
    }
    return countries.find(theCountry);
  };

  const { params } = props.match;
  const foundCountry = getCountry(params.id, 10);

  return (
        <div className="col-7">
        <h1>{foundCountry.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td className = 'capital-width'>Capital</td>
              <td>{foundCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{foundCountry.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {foundCountry.borders.map((eachBorder, index)=> {
                    return (
                      <div key={index}>
                        <Link to={`/${eachBorder}`}><li className="border-li"><span className="border-link">{getCountry(eachBorder).name.common}</span></li></Link>
                      </div>
                    )
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default countryDetails;