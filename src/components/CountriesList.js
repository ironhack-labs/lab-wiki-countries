import React from 'react';

import countries from './../countries.json';
import {Link, NavLink} from 'react-router-dom'; 

class CountriesList extends React.Component {
    state = {
        countries
    };

    render() {
        const {countries} = this.state;
        return (
              <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
                <div className="list-group">
                 {countries.map(country => {
                     return(
                        <NavLink 
                            className='list-group-item list-group-item-action'
                            to={`/${country.cca3}`}
                        >
                             <h3>{country.flag} {country.name.official}</h3>
                         </NavLink>
                     )
                 })
                 }
                </div>
              </div>
        )
    }
}

export default CountriesList;

// <a className="list-group-item list-group-item-action" href="/ABW">🇦🇼 Aruba</a>