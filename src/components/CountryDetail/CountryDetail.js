import React from 'react'
import { Link } from 'react-router-dom'


const CountryDetail = (props) => {

    const id = props.match.params.id
    const chosenCountry = props.country.filter(elm => elm.cca3 === id)
    const copiedCountries = { ...chosenCountry[0] }

    return (
        <div>
            <h1>{copiedCountries.name.official}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: '30%' }}>Capital</td>
                        <td>{copiedCountries.capital[0]}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{copiedCountries.area} km
                    <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {copiedCountries.borders.map((elm, idx) => <li key={idx} > <Link to={`/detail/${elm}`} > {elm} </Link>  </li>)}

                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetail
