import React from 'react'
import { useParams } from 'react-router-dom';

function CountryDetails(props) {
    const params = useParams()
    const countryId = params.id
    const country = props.countries.find(country => country.alpha3Code === countryId)
    console.log(country)

    return (
        <div>
            <h1>{country.name.official}</h1>
            <ul>
                <li>{country.capital[0]}</li>
                <li>{country.area}</li>
                {country.borders.map((border, index) => {
                    return <li key={index}>{border}</li>
                })}
            </ul>
        </div>
    )

}
export default CountryDetails;