import React from 'react';
import countries from '../countries.json';

const CountryDetails = (props) => {
    const countryCode = props.match.params.cca3;
    const getCountry = countries.find(obj => obj.cca3 === countryCode);
    console.log('este es el getcountry',getCountry)
    // const { params } = props.match;
    // const foundCountry = getCountry(params.cca3);
// console.log(props)
 
    return (
        <div className="col-7">
            <h1>{getCountry.flag} {getCountry.name.common}</h1>
            <table class="table">
            <thead></thead>
              <tbody>
                <tr>
                <td>Capital</td>
            <td>{getCountry.capital}</td>
            </tr>
                <tr>
                  <td>Area</td> 
                  <td>{getCountry.area} km</td>
                  </tr>
                  <tr>
                  <td>Borders</td>
                  <td>
            {getCountry.borders.map((oneCountry, index) =>{
                const getBorder = countries.find(obj => obj.cca3 === oneCountry)
                return (
                <ul>
                <li><a>{getBorder.name.common}</a></li>
                </ul>
                )})}
                </td>
                </tr>
              </tbody>
            </table>
        </div>
    )
}

export default  CountryDetails