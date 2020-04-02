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
      // console.log('c', country.borders, country.cca3)
      return item.borders.includes(country.cca3)
    })

    // const borders = result.borders.map(countryCode => (
    //   Countries.filter((element => element.cca3.includes(countryCode)))))

    console.log('borders', borderCountries)

    return (
      
      <div>
        <h1>{country.name.common}</h1>
        <table >
          <tbody>
            <tr>
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
