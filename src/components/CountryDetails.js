import { Component } from "react";
import "./CountryDetails.css"
import { Link } from "react-router-dom";

class CountryDetails extends Component {

    render() {
        let code = this.props.match.params.cca3
        let mappedCountries = {}

        for (let i = 0; i < this.props.countries.length; i++) {
            let country = this.props.countries[i]
            mappedCountries[country.cca3] = country
        }

        let foundCountry = mappedCountries[code]

        return (
            <div className="col-7">
                <h1>{foundCountry.name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td className="countryCapital">Capital</td>
                            <td>{foundCountry.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {foundCountry.area} km <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {foundCountry.borders.map((elm, id) => <li key={id}><Link to={`/${elm}`}>{mappedCountries[elm].name.common}</Link></li>)}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CountryDetails