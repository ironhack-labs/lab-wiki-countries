import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class CountryDetails extends Component {
    state={
        country: null
    }
    render() {
        const countryToDisplay = this.props.example.filter((country, i)=>(country.cca3 === this.props.match.params.code))
        const country = countryToDisplay[0]
        return (
            country ? <div className='col-7'>
            <h1>{country.name.common}</h1>
            <table class="table">
                <tbody>
                <tr>
                  <td style={{width:'30%'}}>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{country.area} km<sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                  {country.borders.length && <ul>
                {country.borders.map((b,i)=>(
                    <Link to={`/${b}`}><li>{b}</li></Link>
                ))}
                </ul>}
                  </td>
                </tr>
                </tbody>
            </table>
            </div> : <div>loading ...</div>
        )
    }
}
