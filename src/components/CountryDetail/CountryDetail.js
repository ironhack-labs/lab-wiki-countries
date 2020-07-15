import React from "react"
import { Link } from "react-router-dom"
const CountryDetail = ({ countryInfo }) => {

    const listItems = countryInfo.borderCountriesInfo.map(country => <li key={country.code}><Link to={`/${country.code}`}>{country.name}</Link></li>)
    return (
        <div className="col-7">
            <h1>{countryInfo.countryToRender.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{countryInfo.countryToRender.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{countryInfo.countryToRender.area} km
                    <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {listItems}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
    
}

export default CountryDetail;
