import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

function CountriesListComponent(props) {
    const { countries } = props;
    return (
        <div className="countries-list">
            <h3>Countries list</h3>
            
            <ul>
            { countries.map((element) => {
                return (<li><Link to={`/${element.cca3}`}>{element.name.official}</Link></li>)
            }
            )}
            </ul>
            
        </div>

    )
    
};

export default CountriesListComponent;