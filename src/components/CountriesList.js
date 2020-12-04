import React from 'react';

import {NavLink} from 'react-router-dom'; 

class CountriesList extends React.Component {

    render() {
        return (
              <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
                <div className="list-group">
                 {this.props.countries.map(country => {
                     return(
                         <div key={country.cca3} className='list-group-item list-group-item-action'>
                            <NavLink to={`/${country.cca3}`}>
                                <h3>{country.flag} {country.name.official}</h3>
                            </NavLink>
                         </div>
                     )
                 })
                 }
                </div>
              </div>
        );
    }

}

export default CountriesList;

// <a className="list-group-item list-group-item-action" href="/ABW">🇦🇼 Aruba</a>