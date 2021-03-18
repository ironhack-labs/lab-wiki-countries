import React, { Component } from 'react'
import { Link } from "react-router-dom";


class CountriesList extends Component {
    render() {
        
        const divStyle = {
            maxHeight: '90vh',
            overflow: 'scroll',
          };
        
        return (
            <div className="col-5" style={divStyle}>
                <div className="list-group">
                    {this.props.countries.map(country => 
                        <Link exact to={`/${country.cca3}`} className="list-group-item list-group-item-action">{country.flag} {country.name.common}</Link>
                    )}
                </div>
            </div>
        )
    }
}

export default CountriesList
