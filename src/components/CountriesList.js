import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({countries}) => {

    return (
        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <div className="list-group">
                {countries.map(country => 
                    <Link
                        key={country.cca3}
                        className="list-group-item list-group-item-action"
                        to={`/${country.cca3}`}>
                            <img 
                                src={`https://www.countryflags.io/${country.cca2.toLowerCase()}/flat/64.png`} 
                                alt={country.cca2}/>
                            {`${country.name.common}`}
                    </Link>
                )}
            </div>
        </div>
    )

}

export default CountriesList;
