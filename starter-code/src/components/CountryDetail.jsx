import React from 'react'
import { Link } from 'react-router-dom';
import Countries from "../countries.json";


class CountryDetail extends React.Component {
  render() {
    const selectedCode = this.props.match.params.code;
    const country = Countries.find((country) => {
      return country.cca3 === selectedCode
    })

    const borderCountries = Countries.filter((item) => {
      return item.borders.includes(country.cca3)
    })

    console.log('borders', borderCountries)

    return (
      
      <div className="container">
        <h1>{country.name.common}</h1>
        <table className="table">
          <tbody>
            <tr className="country-detail">
              <td>Capital</td>
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
                  {borderCountries.map(borderCountry => (
                    <li>
                      <Link to={`/country-detail/${borderCountry.cca3}`}>
                        {borderCountry.name.common}</Link>
                    </li>
                  ))
                  }

                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default CountryDetail
