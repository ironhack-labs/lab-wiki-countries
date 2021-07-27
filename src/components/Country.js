import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class Country extends Component {
    render() {
        return (
            <li>
                <Link to={`/countrydetails/${this.props.countryCode}`}
                    className="list-group-item list-group-item-action" aria-current="true">
                    <img src={`https://www.countryflags.io/${this.props.countryFlag}/flat/64.png`} alt="flag" />{this.props.name}
                </Link>
            </li>
        )
    }
};

export default Country;