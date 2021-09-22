import countries from './../../countries.json'
import { Link } from "react-router-dom";


const CountryDetails = (props) => {

  const { cca3 } = props.match.params;
  const foundCountry = countries.find(country => country.cca3 === cca3);

  return (
    <div class="col-7">
      <h1>{foundCountry.name.common}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          {
            (foundCountry.capital.length !== 0 && foundCountry.capital[0] !== "")  &&
          <tr>
            <td className="width">Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          }
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          {
          foundCountry.borders.length !== 0 && 
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {
                  foundCountry.borders.map(country => {
                    const names = countries.find(elm => country === elm.cca3).name.common
                    return <li><Link to={`/${country}`}>{names}</Link></li>
                  })
                }
              </ul>
            </td>
          </tr>
          }
        </tbody>
      </table>
    </div>
  )
}


export default CountryDetails;
