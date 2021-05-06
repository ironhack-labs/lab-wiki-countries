import React from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom'

export default function CountryDetails(props) {
    const country = countries.find(country => country.cca3 === props.match.params.id)
    const capital = country.capital.map(cap => <p key={cap}>{cap}</p>)
    const area = <td>{country.area} km<sup>2</sup></td>
    const borders = country.borders.map((border, index) => {
        const countryName = countries.find(country => country.cca3 === border).name.official;
    return <li><Link key={index} to={`/${border}`}>{countryName}</Link></li>
    })

    return (
        <div className="col-7">
            <h1>{country.name.official}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                    {area}
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {borders}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
    )
}
