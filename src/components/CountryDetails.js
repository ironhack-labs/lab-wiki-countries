import { useParams } from "react-router-dom";


function CountryDetails (props) {
    const { countryCode } = useParams();
    const { countries } = props;
    const country = countries.find(country => country.alpha3Code === countryCode);

return (
    <div class="col-7">
                <h1>{country.name.common}</h1>
                <table class="table">
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
                                {country.borders.map(borderCountry => {
                                    return <li key={borderCountry}>{borderCountry ? borderCountry : "No bordering countries"}</li>
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetails;