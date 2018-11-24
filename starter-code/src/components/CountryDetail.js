import React, { Component } from 'react'
import data from '../countries.json'
import { Link } from 'react-router-dom';
 class CountryDetail extends Component {
   render() {
     const country = data.find((item) => {
      return item.cca3 === this.props.match.params.id
    })
     return (
      <div className="col-7">
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {country.borders.map((border,idx) => {
                    const country = data.find((country)=> {
                      return country.cca3 === border
                    })
                    return <li key={idx}> <Link to={`/${border}`}> {country.name.common} </Link> </li>
                  })}
                    
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
 export default CountryDetail;
