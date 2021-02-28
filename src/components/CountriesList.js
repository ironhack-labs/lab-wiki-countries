import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CountriesList extends Component {
    render() {
        return (
            <div style={{width:"75%"}}>
                <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
                    <div className="list-group">
                    {this.props.countries.map(country => (
                        <Link key={country.cca3} to={`/countrydetails/${country.cca3}`} className="list-group-item list-group-item-action"><img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} alt="flag" className="countryFlag"/>{country.name.common}</Link>
                    ))
                    }
                        
                    </div>
                </div>

            </div>
        )
    }
}


