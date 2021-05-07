import React from "react";
import {Link} from "react-router-dom";
import countries from "../../countries.json"


function CountriesDetails(props) {
    console.log("PROPS DINS",props)
    const countryId = props.match.params.id;

    const country = countries.find(country => country.cca3 === countryId)
    
    const borderList = country.borders.map(border => {
        const borderCountry = countries.find(country => country.cca3 === border)
        return <li key={borderCountry.cca3}><Link to={`/${borderCountry.cca3}`}>{borderCountry.name.common}</Link></li>
    })
 
    
    return (
        <div>
            <h1>{country.name.common}</h1>
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{country.area</td>
                    </tr>
                </tbody>
            </table>
            <p>{country.capital}</p>
            
                <ul>
                    {borderList}
                </ul>
            
        </div>
    )
}

export default CountriesDetails;