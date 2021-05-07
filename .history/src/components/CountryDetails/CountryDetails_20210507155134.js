import React from "react";
import {Link} from "react-router-dom";


function CountriesDetails(props) {
    const countryId = props.match.params.id;
    const country = props.countries.find(country => country.cca3 === countryId);

    const borderList = country.borders.map(border => {
        const borderCountry = props.countries.find(country => country.cca3 === border)
        return <li key={borderCountry.cca3}><Link to={`/${borderCountry.cca3}`}>{borderCountry.name.common}</Link></li>
    })

    return (
        <div className="col-7">
            
        </div>

    )
}

export default CountriesDetails;