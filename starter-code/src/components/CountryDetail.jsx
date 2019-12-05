import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Data from './../countries.json';
import CityDetail from './CityDetail.jsx';

export class CountryDetail extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
                        <div className="list-group">
                            {Data.map(country => {
                                return(
                                    <Link to={`/${country.cca3}`} className='list-group-item list-group-item-action'>
                                    {country.flag} {country.name.common}
                                </Link>
                                )
                                
                            })}
                        </div>
                    </div>
                </div>
                <CityDetail />
            </div>
        )
    }
}

export default CountryDetail


