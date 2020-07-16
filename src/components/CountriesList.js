import React, { Component } from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

function CountriesList() {
    return (
        <div className="col">
            <div className="display-4 border border-rounded">All Countries</div>
            <ul className="list-group">
                {countries.map((c) => (
                    <li className="list-group-item" style={{ maxHeight: 100 }}>
                        <Link to={'/countries/' + c.cca3}>{c.name.common}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CountriesList;