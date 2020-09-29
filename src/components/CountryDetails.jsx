import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

function findCountry(countryCode) {
    return countries.filter( c => c.cca3 === countryCode)[0]
}

export default function CountryDetails(props) {

    const country = findCountry(props.match.params.code)

    return (
        <div className="row list-group list-group-flush">
            <div className="col-12 list-group-item p-0 mt-3">
                <h1 className="text-left"> {country.name.common} </h1>
            </div>
            <div className="col-12 list-group-item text-left">
                <div className="row">
                    <div className="col-4"> Capital </div>
                    <div className="col-8"> {country.capital[0]} </div>
                </div>
            </div>

            <div className="col-12 list-group-item text-left">
                <div className="row">
                    <div className="col-4"> Area </div>
                    <div className="col-8"> {country.area} k&#13217;</div>
                </div>
            </div>

            <div className="col-12 list-group-item text-left">
                <div className="row">
                    <div className="col-4"> Borders </div>
                    <div className="col-8"> 
                        <ul>
                            {country.borders.map(c => (
                                <li>
                                    <Link to={"/country/" + c}>{findCountry(c).name.common}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}