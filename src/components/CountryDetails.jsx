import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';
import './CountryDetails.css';

const CountryDetails = (props) => {
    const country = countries.find(country => country.cca3 === props.match.params.id)
    return (
        <ul class="list-group list-group-flush CountryDetails">
            <li class="list-group-item">
                <h3>{country.name.common}</h3>
            </li>
            <li class="list-group-item">
                <div className="splitted">
                    <div>
                        Capital:
                    </div>
                    <div>
                        {country.capital[0]}
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div className="splitted">
                    <div>
                        Area:
                </div>
                    <div>
                        {country.area} km<sup>2</sup>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div className="splitted">
                    <div>
                        Borders:
                </div>
                    <div>
                        <ul>
                            {country.borders.map(border => {
                                const borderLink =  countries.find(country => country.cca3 === border)
                                return (
                                    <li className="decoration" key={border}>
                                        <Link to={`/country/${borderLink.cca3}`} className="list-group-item list-group-item-action borderLi">
                                            {borderLink.name.common}
                                        </Link>
                                    </li>)
                            })}
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    );
}

export default CountryDetails;