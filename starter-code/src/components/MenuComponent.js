import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

export default class MenuComponent extends Component {
    state = {
        countries
    }

    render() {
        const { countries } = this.state

        return (

            <div className="principal" >

                <h1>Bienvenido</h1>
                <div className="sub"
                >

                    {countries.map((country, i) => (
                        <Link key={i} to={`/country/${country.cca3}`}>
                            <p>{country.name.common}</p>
                            <p>{country.flag}</p>
                        </Link>
                    ))}

                </div>
            </div>

        )
    }
}