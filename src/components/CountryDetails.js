import countries from './countries.json'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


const CountryDetails = props => {

    console.log('los params son:', props)

    const { alpha3Code } = props.match.params
    const { countryList } = props

    const selectedCountry = countryList.filter(elm => elm.alpha3Code === alpha3Code)
    console.log(selectedCountry)

    return (
        <div className="col-7">
            <h1>{selectedCountry[0].name}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{selectedCountry[0].capital[0]}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {selectedCountry[0].area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {selectedCountry[0].borders.map(elm =>
                                    <li><Link to={elm}>{
                                        countryList.filter(country => country.alpha3Code === elm)[0].name

                                    }</Link></li>)}

                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default CountryDetails