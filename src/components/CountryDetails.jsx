import { Link } from 'react-router-dom'
import countries from '../countries.json'

export default function CountryDetails(props){

    const params = props.match.params.cca3
    const country = countries.find((c) => c.cca3 === params)

    return (
        <div className="CountryDetails">
            
            <h1>{country.name.official}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{width: "30%"}}>Capital</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {country.area} km
                    <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {country.borders.map((b) => {
                                    const borderName = countries.find((c) => c.cca3 === b)
                                    return <li><Link to={`/${borderName.cca3}`}>{borderName.name.official}</Link></li>
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}