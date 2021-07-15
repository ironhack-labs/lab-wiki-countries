import countries from "../data/countries.json"
import { Link } from 'react-router-dom'

const CountryDetails = props => {

    const { params } = props.match;

    return (
        <>
            <h2>{countries.name}</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{countries.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{countries.area} km</td>
                    </tr>
                    {/* <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {countries.borders.map(elm =>
                                    <div ><li ><Link to={`/${elm}`} key={elm.cca3}>{elm}</Link></li></div>)}
                            </ul>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </>
    )
}

export default CountryDetails
