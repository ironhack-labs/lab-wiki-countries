import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CountryDetails = ({ countries }) => {

    const { countryId } = useParams()

    const selectedCountry = countries.find(elm => elm.alpha3Code === countryId)

    return (
        <div className="col-7 countryDetails">
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${selectedCountry.alpha2Code.toLowerCase()}.png`} />
            <h1>{selectedCountry.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td className="countryDetails">Capital</td>
                        <td>{selectedCountry.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {selectedCountry.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>{
                                selectedCountry.borders.map((elm) => {
                                    const link = `/${elm}`
                                    return (
                                        <li><Link to={link}>{elm}</Link></li>
                                    )
                                })
                            }
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default CountryDetails