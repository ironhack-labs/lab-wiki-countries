import React from "react";
import countries from '../../countries.json'

export default function CountryDetails(props) {

    const { cca3 } = props.match.params
    const foundCountry = countries.find(country => country.cca3 === cca3)


    return (

        <section>

            {foundCountry &&

                <div>
                    <h1>{foundCountry.name.common}</h1>
                    <hr />
                    <p>Capital: {foundCountry.capital}</p>
                    <hr />
                    <p>Area: {foundCountry.area}</p>
                    <hr />
                    <div>
                        <p>Borders:</p>
                        <ul>
                            {foundCountry.borders.map((border, idx) => {
                                return (
                                    <li key={idx}>{border}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            }

        </section>
    )
}
