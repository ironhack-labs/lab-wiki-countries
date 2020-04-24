import React, { Component } from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

class CountryDetail extends Component{

    render() {
    const oneCountry = id => countries.find(aCountry => aCountry.cca3 === id);

    const { params } = this.props.match;

    const findOneCountry = oneCountry(params.id)

        return(
            <div>
                <h1>{findOneCountry.name.common}</h1>
                <h3>Capital:{findOneCountry.capital}</h3>
                <h3>Area:{findOneCountry.area} km</h3>
                <h3>Borders:</h3>
                <ul>{findOneCountry.borders.map((item, index) => {
                    return <li key={index}><Link to={item}>{oneCountry(item).name.common}</Link></li>
                    })}
                </ul>
            </div>
        )
    }
}
export default CountryDetail; 
