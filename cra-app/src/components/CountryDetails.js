import { Link } from 'react-router-dom'
import CountriesFromJson from '../countries.json'


const CountryDetails = props => {

    const country = CountriesFromJson.find((elm) => elm.cca3 === props.match.params.cca3)

    return (

        <div className="col-7">

            <h1>{country.name.official}</h1>
            <table class="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ "width": "30%" }}>Capital</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{country.area} km<sup>2</sup></td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {country.borders.map(
                                    (elm, idx) => {

                                        const border = CountriesFromJson.find((element) => element.cca3 === elm);

                                        return (
                                            <li key={idx}>
                                                <Link to={border.cca3}>{border.name.official}</Link>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </td>
                    </tr>
                </tbody>

            </table>

        </div >
    )
}
export default CountryDetails