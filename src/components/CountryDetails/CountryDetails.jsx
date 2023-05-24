import countries from '../../countries.json'
import { Link, useParams } from "react-router-dom";


function CountryDetails() {

    const { country_id } = useParams()

    const selectedCountries = countries.find(elm => elm.alpha3Code === country_id)

    return (
        <div className="col-7">
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${selectedCountries.alpha2Code.toLowerCase()}.png`} />

            <h1>{selectedCountries.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{selectedCountries.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {selectedCountries.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {
                                    selectedCountries.borders.map(elem => {

                                        return (
                                            <Link to={`/${elem}`} className="list-group-item list-group-item-action">
                                                <p>{elem}</p>
                                            </Link>
                                        )
                                    })
                                }

                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default CountryDetails