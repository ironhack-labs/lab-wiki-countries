import React from 'react';
import countries from './countries.json';
import {Link} from 'react-router-dom';

export default class CountryDetail extends React.Component {
  
    render() {
    let country = countries.find(e => e.cca3 === this.props.match.params.cca3);

    let bordersArray = country.borders.slice();
    let borders = countries.filter(c => bordersArray.includes(c.cca3));

    return (
        <div>
            <h2>{country.name.common}</h2>
            <spam>{country.flag}</spam>
            <hr/>
            <h6>Capital: {country.capital}</h6>
            <hr/>
            <h6>Area: {country.area} m<sup>2</sup></h6>
            <hr/>
            <h6>
            {''}
                Borders: {''}
                <span>
                    <ul>
                        {borders.map((country, index) => 
                            <li key={index}>
                            <Link to={'/country/' + country.cca3}>{country.name.common}</Link>
                            </li>)}
                    </ul>

                </span>
            </h6>

        </div>
    )  
  }
    }
