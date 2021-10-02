import React from "react";
import countries from '../countries.json'

import { Link, Route } from 'react-router-dom';

function findBorderingCountryName(borderCountry) {
    let borderingCountry = countries.find(
        (country) => country.cca3 === borderCountry
    );
    return borderingCountry.name.official;
}

class CountryDetails extends React.Component {

    render() {

        let currentCountry = countries.find((country) => country.cca3 === this.props.match.params.identifier)
        console.log("currentCountry", currentCountry)
        return (
            <div>
                <div className="">
                    <div className="experience-content">
                        <h1>{currentCountry.flag}</h1>
                        <h3>{currentCountry.name.official}</h3>
                        <p>{currentCountry.capital}</p>
                        <h3>{currentCountry.borders.map((borderCountry) => {
                            return (


                                <p><Link to={`/countrydetails/` + borderCountry}>
                                    {findBorderingCountryName(borderCountry)}
                                </Link></p>
                            )
                        })}
                        </h3>
                    </div>
                </div>

            </div>
        )
    }

}

export default CountryDetails