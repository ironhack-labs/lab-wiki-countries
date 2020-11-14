import React from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
    console.log(props);
    let getCountry = id => props.countries.find(obj => obj.cca3 === id);

    const { params } = props.match;

    const foundCountry = getCountry(params.id)
    console.log(foundCountry)

    return (
        <div className="col-7">
        <img src={`https://www.countryflags.io/${foundCountry.cca2}/flat/64.png`} alt=""/>
        <h1>{foundCountry.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td className={{width: "30%"}}>Capital</td>
              <td>{foundCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{foundCountry.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
              <ul> {foundCountry.borders.map((oneCountry, index) =>{
                const getBorder = countries.find(obj => obj.cca3 === oneCountry)
                return (
                  <li key= {oneCountry}><Link className="list-group-item list-group-item-action" to={`/countries/${getBorder.cca3}`}><img src={`https://www.countryflags.io/${getBorder.cca2}/flat/64.png`} alt=""/> {getBorder.name.common}</Link></li>
                )})}</ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

       
    )
}

export default CountryDetails
