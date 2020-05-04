import React from 'react'
import  countries  from '../countries.json';
import { Link } from 'react-router-dom';



const CountryDetail = (props) => {
    console.log(props)
    const {
        cca3
    } = props.match.params

    const choosenCountry = countries.find(country => country.cca3 === cca3) 

    return (
        <div>
            <div className="col-7">
<h1>{choosenCountry.name.common}</h1>
<table className="table">
  <thead></thead>
  <tbody>
    <tr>
      <td style={{width: 30 + "%"}}>Capital</td>
      <td>{choosenCountry.capital}</td>
    </tr>
    <tr>
      <td>Area</td>
      <td>{choosenCountry.area} km
        <sup>2</sup>
      </td>
    </tr>
    <tr>
      <td>Borders</td>
      <td>
        <ul>
        {choosenCountry.borders.map((border, idx) => {
           
           return <li key={idx}><Link to={"/" + border}>{countries.find(country => country.cca3 === border).name.common}</Link></li>
        })}
       
        </ul>
      </td>
    </tr>
  </tbody>
</table>
</div>
        </div>
    )
}

export default CountryDetail;






