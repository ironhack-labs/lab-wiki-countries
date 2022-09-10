import { Link, useParams } from "react-router-dom";
import "./style/CountryDetails.css";

function CountryDetails(props) {
    // Route -> /alpha3Code (e.g. /FRA, /GER, etc.)
    const params    = useParams();
    const country   = props.countries.find(country => country.alpha3Code === params.alpha3Code);

    return (
        <div className="country-details">
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag" />
            <h1>{country.name.common}</h1>

            <table>
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{country.capital[0]}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{country.area} km2</td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td><ul>{country.borders.map(border => (
                                <li>
                                    <Link to={`/${border}`}>
                                        {props.countries.find(country => country.alpha3Code === border).name.common}
                                    </Link>
                                </li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>            
        </div>
    );
}

export default CountryDetails;