import React from 'react'
import {Link} from 'react-router-dom'
import countries from '../countries.json'
const CountryDetails =(props) => {
    const country = countries.find((country) =>
    country.cca3 === props.match.params.cca3);

    if(!country) {
        return null;
    }

    return (

        <div className='col-7'>
            <h1>{country.name.common}</h1>
            <table className='table'>
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{width:'30%'}}>Capital</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td>{country.area} km
                        <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {country.borders.map((border)=>(
                                <li>
                                    <Link to={`/${border}`}>{countries.find((country)=>country.cca3===border).name.common}</Link>
                                </li>
                                
                                ))}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default CountryDetails;



















