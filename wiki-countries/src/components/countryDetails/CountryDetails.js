import Countries from './../countries.json'
import { Link } from 'react-router-dom'

const CountryDetails = props => {

    const countryCode = props.match.params.cca3

    const selectedCountry = Countries.filter(elm => elm.cca3 === countryCode)

    const bordersCountries = selectedCountry[0].borders.map(elm => Countries.filter(code => code.cca3 === elm))
    
    return (

        <div className="col-7">
            <h1>{selectedCountry[0].name.official}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                    <td style={{ width: '30%' }}>Capital</td>
                    <td>{selectedCountry[0].capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{selectedCountry[0].area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {bordersCountries.map(elm => <li key={elm[0].ccn3}> <Link to={`/countries/details/${elm[0].cca3}`}>{elm[0].name.official}</Link></li>)}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    )

}

export default CountryDetails