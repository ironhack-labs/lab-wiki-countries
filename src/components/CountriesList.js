import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({countries = [], ...props}) => {
    return (
        <div className="col-5" style={{maxHeight: "40rem", overflow: "scroll", border: "none"}}>
                    <div className="list-group">
                {
                    countries.map(country => {
                        return (
                            <div key={country.alpha3Code}>
                                <Link className="list-group-item list-group-item-action" to={`/countries/${country.alpha3Code}`}><img src={country.flag} height='15rem' className="mr-1" alt={`${country.name}-flag`}/> {country.name}</Link>
                            </div>
                            )
                    })
                }
                    </div>
                </div>
    )
}

export default CountriesList;
