import React from 'react'
import { Link } from 'react-router-dom';
import countries from '../countries.json'

const CountryDetails = props => {

    const selectedCountry = countries.find(elm => elm.cca3 === props.match.params.id)

    return(
        <div className="col-7">
            <h1>{selectedCountry.name.official}</h1>
                <table className="table">
                    <thead></thead>
                        <tbody>
                            <tr>
                                <td style={{width:'30'}}>Capital</td>
                                <td>{selectedCountry.capital}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>{selectedCountry.area} km
                                <sup>2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                <ul>
                                    {selectedCountry.borders.map(elm => <li key={elm}><Link to={`/${elm}`}>{elm}</Link></li>)}
                                </ul>
                                </td>
                            </tr>
                        </tbody>
                </table>
        </div>
    )

}

export default CountryDetails