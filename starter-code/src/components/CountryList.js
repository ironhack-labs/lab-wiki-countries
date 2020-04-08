import React from 'react';
import { Link } from "react-router-dom";
import "../styling/CountryList.css"

class CountryList extends React.Component {
    render() {
        return (
            <div className="country">
                < Link to={`/country-detail/${this.props.code}`}>
                    <li>{this.props.flag} {this.props.name}</li>
                </Link>
            </div>
        )
    }
}

export default CountryList;
