import { Link, useParams } from "react-router-dom";

const CountryDetails = (props) => {

    const { countries } = props
    const { countryId } = useParams();

    function getCountryName (code) {
        const country = countries.find(c => c.alpha3Code === code)
        return country.name.common
    }

    const clickedCountry = countries.find(country => country.alpha3Code === countryId)

    return (
        <>
            <h1>{clickedCountry.name.common}</h1>

            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{clickedCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {clickedCountry.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {
                            clickedCountry.borders.map(alpha3Code => (
                                <li key={alpha3Code}><Link to={`/${alpha3Code}`}>{getCountryName(alpha3Code)}</Link>
                                </li>
                            ))
                        }
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
        </>
    )
}

export default CountryDetails;