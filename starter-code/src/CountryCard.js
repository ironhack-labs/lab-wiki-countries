import React from 'react';
import {Link, Route} from "react-router-dom"; 


class CountryCard extends React.Component {

    render() {
        return (
                <div className="countrycard">
                    <Link className="link" to={`/${this.props.cca3}`}>{this.props.country}</Link>
                </div>
        )
    }
}

export default CountryCard