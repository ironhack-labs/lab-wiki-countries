import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class CountryDetail extends Component {
  state ={ 
    country: {},
  }

  displayCountry = () => {

    const { cca3 } = this.props.match.params;
    const { countries } = this.props;
    const filteredCountry = countries.filter((country) => {
      return country.cca3 === cca3
    })

    return (
      <div className="col-7">
        <h1>{filteredCountry[0].name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
              <td>{filteredCountry[0].capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{filteredCountry[0].area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {this.displayBorders(filteredCountry[0])}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  displayBorders = (filteredCountry) => {
  const { countries } = this.props;
   return filteredCountry.borders.map(border => {
     const filteredBorders = countries.filter(country => {
       return country.cca3 === border
     })
     return <li key={filteredBorders[0].name.common}><Link to={`/${border}`}>{filteredBorders[0].name.common}</Link></li>
   })
  }


  render() {
    return (
      this.displayCountry()
    )
  }
}

export default CountryDetail