import React from 'react'
// import countries from '../countries.json'
import { Link } from 'react-router-dom'

export default function CountryDetails(props) {
    const countryId = props.match.params.id // "id" use the same name as in App.js line 18

    const country = props.countries.find(element => element.cca3 === countryId);

    const borders = country.borders.map(border => {
        let borderCountry = props.countries.find(country => country.cca3 === border)
        return <li key={border}> <Link to={`/countries/${border}`}> {borderCountry.name.common} </Link></li>
    })

    return (
        <div>
             <h1>{country.name.common}</h1>
             <h3>{country.name.official}</h3>
             <table className="table"> 
                 <thead></thead>
                 <tbody>
                     <tr>
                         <td style={{width: '30%'}}>Capital</td>
                         <td>{country.capital}</td>
                     </tr>
                     <tr>
                         <td>Area</td>
                         <td>
                         {country.area} km<sup>2</sup>
                         </td>
                     </tr>
                     <tr>
                         <td>Borders</td>
                         <td>
                             <ul>
                                 {borders}
                             </ul>
                         </td>
                     </tr>
                 </tbody>
             </table>
         </div>
    )
}
