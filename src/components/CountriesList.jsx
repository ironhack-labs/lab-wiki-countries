import React from 'react'

import { Link } from "react-router-dom"


export default class CountriesList extends React.Component {
    render() {

        return (
            <div className="list-group" >
                {this.props.countries.map((country) => {
                    return (<Link to={`/${country.cca3}`} key={country.cca3} className="list-group-item list-group-item-action"> {country.flag} {country.name.common}</Link>
                    );
                })
                }
            </div>
        );
    }
}