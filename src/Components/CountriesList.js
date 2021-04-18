import React from 'react';
import { Link } from "react-router-dom";
import countries from '../countries.json';

function CountriesList(props) {
    return <div className="col-4 mt-3 ml-0" style={{maxHeight: "90vh", overflow: "scroll"}}>
        {countries.map((country) => (
            <div className="list-group" key={country.cca3}>
                <Link to={`/countries/${country.cca3}`}>
                    <p>{country.flag}&nbsp; {country.name.official}</p>
                </Link>
            </div>
        ))}
    </div>

}

export default CountriesList; 