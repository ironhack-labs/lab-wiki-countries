import React from 'react'
import { Link } from 'react-router-dom'


export default function CountryDetails(props) {

 
    const id = props.match.params.id
    const countriesArr = props.countries

    
    const countryFoundByIdArr = countriesArr.filter(country => country.cca3 === id)
    const country = countryFoundByIdArr[0]

    const bordersIdArr = country.borders
    let borderCountriesFoundById = []
    bordersIdArr.forEach(borderCountry => borderCountriesFoundById.push(...(countriesArr.filter(country => country.cca3 === borderCountry))))
        
    return (

        
            <div className="col-7">
                <h1>{country.name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Country</td>
                            <td>{country.capital[0]}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{country.area} km
                                <sup>2</sup>
                        </td>
                        </tr>
                        <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                            {
                                borderCountriesFoundById.map((country, index) => 
                                <li key={index}>
                                <Link 
                                to={country.cca3} 
                                key={index}
                                >

                                {country.flag} &emsp;
                                {country.name.common}
                                </Link>
                                </li>
                                )
                            }
                            </ul>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    )
}


