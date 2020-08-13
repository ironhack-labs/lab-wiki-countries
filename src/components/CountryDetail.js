import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json'



const CountryDetail = (props) => {


    let getCountryInfo = (cca3) => countries.find((obj) => obj.cca3 === cca3);

    const {params} = props.match;

    const foundCountry = getCountryInfo (params.cca3);
    


  return (
    <div>
      <div classNameName="col-7">
        <h1>
        {foundCountry.name.common} 
        </h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td> {foundCountry.capital} </td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
              {foundCountry.area} 
                <sup> km2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  <li>
                  {foundCountry.borders.map(oneBorder => {
                      return  <li> <Link to={`/countries/${oneBorder}`}>{

                    getCountryInfo(oneBorder).name.common}</Link></li>
                  })}
                 
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CountryDetail;
