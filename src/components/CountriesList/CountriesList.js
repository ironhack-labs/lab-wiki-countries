import React from 'react';
import { Link } from 'react-router-dom';
import countries from './../../countries.json';

class CountriesList extends React.Component {

    state = {
        countriesList: countries
    }
    render() {
        return (
            <div className="col-5" style={{ maxHeight: ' 90vh', overflow: 'scroll' }}>
            {this.state.countriesList.map((country) => {
                return (
                    <div className="list-group">
                    <Link to={`/${country.cca3}`} className="list-group-item list-group-item-action">
                         <span role="img">{country.flag} </span>
                          {country.name.common} 
                    </Link>
                    </div>
                )
            })
            }
            </div>
            
            
        )
    }
}

export default CountriesList;