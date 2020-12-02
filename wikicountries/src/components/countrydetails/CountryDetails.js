import { Link } from 'react-router-dom'
import countries from '../countries.json'

const CountryDetails = (props) => {

    const theCountry = countries.filter(elm => elm.cca3 === props.match.params.country)[0]

    return (
        <article className="col-7">
            <h1>{theCountry.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                <tr>
                    <td className="trow">Capital</td>
                    <td>{theCountry.capital}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>{theCountry.area} km
                    <sup>2</sup>
                    </td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                            {theCountry.borders.map(elm => <li key={elm}><Link to={elm}>{elm}</Link></li> )}
                        </ul>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    )
}

export default CountryDetails


