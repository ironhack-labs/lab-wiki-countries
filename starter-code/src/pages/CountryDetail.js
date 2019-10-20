import React from 'react'
import countries from '../countries.json';

function CountryDetail(props) {
    // props.match.params.cca3
    var filteredCountry = countries.filter((country)=> country.cca3 === props.match.params.cca3)[0]
    debugger
    return (
        <div>
            <h1>
                {filteredCountry.name.common}
            </h1>
            <h2>
                Capital: {filteredCountry.capital}
            </h2>
            <h2>
                Area: {filteredCountry.area}
            </h2>
            <h2>
                Borders: <ul>
                    {filteredCountry.borders.map((border, index) => {
                        var borderCountry = countries.find(filteredCountry => {
                            return 
                        })
                    })}
                </ul>
            </h2>
        </div>
    )
}

export default CountryDetail