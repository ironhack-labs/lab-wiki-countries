import React from 'react';
import  { Link } from 'react-router-dom';


const CountryDetail = (props) => {
    const { countries } = props;
    const country = countries.filter((country) => country.cca3 === props.match.params.id);
    if (country) {
      const borders = country[0].borders.map((code) => {
      const countryFromCode = countries.find((country) => country.cca3 === code);
        return (
          <li key={code}><Link to={`/${code}`}>{countryFromCode.name.common}</Link></li>
        )
      });  
      return (
        <div className="col-7">
            <h1>{country[0].name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{country[0].capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{country[0].area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {borders}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      )
    } else {
    return null;
  }
}

export default CountryDetail;