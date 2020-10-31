import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryDetails(props) {
    console.log(props.match.params)
    //console.log(props.countries)   
    const matchId = props.countries.find((country) => 
        {
           return country.cca3 === props.match.params.countryId
        }
    )

    const borderCountry = matchId.borders

    const borderCountryName = borderCountry.map((name) =>{
        return props.countries.find((code) => code.cca3 === name)
    })
    
    console.log(borderCountryName)

        return (
        <div className='col-7' id='right'>
         <h1>{matchId.name.common}</h1>
         <table>
            <tr>
                <td>Capital:</td>
                <td>{matchId.capital}</td>
            </tr>
            <tr>
                <td>Area:</td>
                <td>{matchId.area} km2</td>
            </tr>
            <tr>
                <td>Borders:</td>
                <td>
                            {borderCountryName.map((country) => 
                                <ul>
                                <li> 
                                <Link to={`/country/${country.cca3}`}>
                                {country.name.common}
                                </Link> 
                                </li>
                            </ul>
    
                            )}
                            
                            
                    </td>
            </tr>
            </table>
           </div>
    )
}
