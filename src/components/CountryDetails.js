import React from 'react'
import countries from '../countries.json'
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

export default function CountryDetails(props) {
    const [res,setRes]=countries.filter(a=>a.cca3==props.match.params.cca3)
    console.log(res.borders)

    return (
        
<div className="col-7">
    <h1>{res.name.common}</h1>
    <table className="table">
    <thead></thead>
    <tbody>
      <tr>
        <td>Capital</td>
        <td>{res.capital}</td>
      </tr>
      <tr>
        <td>Area</td>
        <td>{res.area} km
          <sup>2</sup>
        </td>
      </tr>
      <tr>
        <td>Borders</td>
        <td>
          <ul>
          {res.borders.map(border=>(
            <li key={res.ccn3+border}>
            <Link className="list-group-item list-group-item-action"   to={`/${border}`}>
                {border}
            </Link>
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

