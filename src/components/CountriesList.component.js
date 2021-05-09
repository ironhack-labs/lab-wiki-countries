import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

function CountriesListComponent(props) {
    const { countries } = props;
    return (
        <div className="countries-list">
            <h3>Countries list</h3>
            

            { countries.map((element) => {
                return (
                    <Link key={element.cca3} 
                    to={`/${element.cca3}`}>
                    {element.name.official}
                    </Link>
                    
                    )
            }
            )}

            
        </div>

    )
    
};

export default CountriesListComponent;