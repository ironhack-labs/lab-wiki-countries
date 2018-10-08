import React from 'react';
import { Link} from 'react-router-dom';
import countries from '../countries.json';


export default class CountryDetail extends React.Component {
  render() {
    
    let country = countries.find(c => c.cca3 === this.props.match.params.cca3);
  
     let bordersArray = country.borders.slice();
     let borders = countries.filter(c => bordersArray.includes(c.cca3));
     return (
      <div>
        <h2>{country.name.common}</h2>
        <spam>{country.flag}</spam>
        <hr />
        <h5>Capital: {country.capital}</h5>
        <hr />
        <h5>
          Area: {country.area} km
          <sup>2</sup>
        </h5>
        <hr />
        <h5>
          {' '}
          Borders:{' '}
          <span>
            <ul>
              {borders.map((c, i) => (
                <li key={i}>
                  <Link to={'/country/' + c.cca3}>{c.name.common}</Link>
                </li>
              ))}
            </ul>
          </span>
        </h5>
      </div>
    );
  }
}