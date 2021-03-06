import { Link } from "react-router-dom";
import countries from '../../countries.json';


function CountriesDetails(props) {
    const countryCode = props.match.params.country
    const country = countries.find(country => country.cca3 === countryCode)
    return(
        <div className="col-7">
            <h1>{country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{country.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {country.area}km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {country.borders.map((borders, i) => (
                          <li key={i}>
                              <Link to={`/${borders}`}>{borders}</Link>
                            </li>
                      ))}       
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    )
}

export default CountriesDetails;