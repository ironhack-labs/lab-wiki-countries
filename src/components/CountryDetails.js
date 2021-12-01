import { Link } from 'react-router-dom'
import countries from './../countries.json'


const CountryDetails = props => {
    const { id } = props.match.params
    const country = countries.filter(el => el.cca3 === id)[0]

    return (
        <div className="col-7">
            <h1>{country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td /*style="width: 30%"*/>Capital</td>
                  <td>{country.capital[0]}</td>
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
                        {
                            country.borders.map((eachBorder, index) => {
                                let borderCountry = countries.filter(el => el.cca3 === eachBorder)[0]
                                return (
                                    <li key={index}><Link className="list-group-item list-group-item-action" to={`/country/${borderCountry.cca3}`}>{borderCountry.flag} {borderCountry.name.common}</Link></li>
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


export default CountryDetails;