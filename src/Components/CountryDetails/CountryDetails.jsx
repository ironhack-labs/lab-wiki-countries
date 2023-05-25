import { Link, useParams } from "react-router-dom"
import countries from '../../countries.json'

function CountriesDetail() {

    const { id } = useParams()

    const selectedCountry = countries.find(elm => elm.alpha3Code === id)

    return (
        <div>
            <h1>{selectedCountry.name.common}</h1>
            <table class="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }}>Capital</td>
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
                            <ul>
                                {selectedCountry.borders.map((border) => {
                                    console.log(border)
                                    return (
                                        <li><a href={`/${border}`}>{border}</a></li>
                                    )
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Link to="/">Volver al listado</Link>
        </div>
    );
}

export default CountriesDetail;