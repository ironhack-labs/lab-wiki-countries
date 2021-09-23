import React from 'react'
import  countries  from './../../countries.json'
import { Link } from 'react-router-dom'

export default function CountryDetails() {
    
    return (
      countries.map(elm => {
        return (
        <div class="col-7">
            <h1>{elm.name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td id="td-id">Capital</td>
                  <td>{elm.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {elm.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    {/* <ul>
                      <li><Link to= /{props.borders.idx}> Andorra </Link></li>
                    </ul> */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )
    })
)}
   
  


