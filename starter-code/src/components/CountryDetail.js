import React, {useContext} from 'react';

import { CountryContext } from '../contexts/CountryContext';
import { Link } from 'react-router-dom';


const CountryDetail = (props) => {
  const {findCountry} = useContext(CountryContext);
  const cca3 = props.match.params.cca3;
  const country = findCountry(cca3);


  return(
    <div className="col-7">
      <h1>{country.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width: "30%"}}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map(cca3 => {
                  return(<li><Link to={cca3}>{findCountry(cca3).name.official}</Link></li>);
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  );
}

export default CountryDetail;