import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({countries = [], ...props}) => {
    return (
        <div className="col-5" style={{maxHeight: "40rem", overflow: "scroll", border: "none"}}>
                    <div className="list-group">
                {
                    countries.map(country => {
                        console.log('country flag', country.flag)
                        return (
                            <div  key={country.cca3}>
                                <Link className="list-group-item list-group-item-action" to={`/countries/${country.cca3}`}><span className="mr-1">{ country.flag }</span> {country.name.common}</Link>
                            </div>
                            )
                    })
                }
                    </div>
                </div>
    )
}

export default CountriesList;

