import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CountriesList extends Component {


    render() {
        return (
            <div>

            {this.props.countryData.map((country) => {
                return (<Link 
                key={country.cca3}
                className="list-group-item list-group-item-action"
                to={"/", + country.cca3}
                >

                <span role="img">{country.flag}</span>{country.name.common}
                </Link>)
            })}

            </div>
        )
    }
}