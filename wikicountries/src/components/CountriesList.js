import React from 'react';
import countries from './countries.json';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
    
    return (
        <div className="container">
            
            <div className="row">
        
            <div className="col-5" styles="max-height: 90vh; overflow: scroll;">
            <div className="list-group">
            
            
            {countries.map((elm, index) => {
                return (
                   
                    <Link class="list-group-item list-group-item-action" to={`/${elm.cca3}`}>{elm.name.common}{elm.flag} </Link>
                
                )
            })}
                
                </div>
            </div>
            </div>
            </div>
            
    )
}

export default CountriesList

