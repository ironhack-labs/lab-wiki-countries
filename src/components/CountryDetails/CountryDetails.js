import React from 'react'
import { Link } from 'react-router-dom'

function Details(props){
        return (
            <div class="col-7">
            <h1>{props.country[0].name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{props.country[0].capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {props.country[0].area}KM
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {props.country[0].borders.map((eachCountry) => {
                            return <Link key={eachCountry} to={`/eachCountry/${eachCountry}`}>
                                    <li>{props.countries.find((country) => country.cca3 === eachCountry).name.common}</li>
                                    </Link>
                        })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )
    }


export default Details

