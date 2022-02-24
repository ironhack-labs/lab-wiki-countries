
//CountriesList.js

import {useState } from 'react';
import { Link } from "react-router-dom";

function CountriesList(props) {
 const [countriesList, setCountries] = useState(props.countries);

 return (
     <div>
        {countriesList.map((country) => {
         return (
            <div className="container">
            <div className="row">
                <div className="col-5">
                    <div className="list-group">
                    <Link to={`/${country.alpha3Code}`}>
                        {country.name.common}
                    </Link>
                    </div>
                </div>
            </div>
        </div>
        )
        })}        
    </div>
 )
}

export default CountriesList;