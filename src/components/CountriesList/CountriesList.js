import React from 'react'
import '../CountriesList/CountriesList.css';
import { Link } from "react-router-dom";

const CountriesList = ({countries}) => {
    return (

        <div className="row">
            <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
                <div>
                    {countries.map((country) => {
                        return (
                        <p key={country.cca3}>
                            <Link exact to={`/${country.cca3}`}>
                                {country.flag} {country.name.common}
                            </Link>
                        </p>
                    )})}
                </div>
            </div>
        </div>




    )
}

export default CountriesList