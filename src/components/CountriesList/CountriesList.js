import React from 'react'
import '../CountriesList/CountriesList.css';
import { Link } from "react-router-dom";
import countries from '../../countries.json'

const CountriesList = () => {
    return (

        <div className="row">
            <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
                <div className="list-group">
                    {countries.map((country) => (
                        <Link className="list-group-item list-group-item-action" to={`/country/${country.cca3}`}>
                            {country.flag} {country.name.common}
                        </Link>
                    ))}
                </div>
            </div>
        </div>




    )
}

export default CountriesList