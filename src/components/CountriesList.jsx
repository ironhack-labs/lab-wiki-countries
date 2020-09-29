import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CountryDetails from './CountryDetails';


class CountriesList extends Component {

    render() {
        
        return (
            
            <div className='container'>
             <CountryDetails />
                <div className='row'>
                    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                        <div className="list-group">
                            {this.props.countries.map(country => {
                                return (
                                    <li className="list-group-item list-group-item-action text-left" >
                                        <Link to={`/${country.cca3}`}><span>{country.flag}</span> <span>{country.name.official}</span></Link>
                                    </li>

                                )
                            })}
                           
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CountriesList;