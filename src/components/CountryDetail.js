import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountryDetail = (props) => {

    const listOfCountries = countries;

    //obtenemos por params el código de cada país
    const countryCode = props.match.params.cca3;

    //buscamos el codigo de cada pais
    //tiene que coincidir con el codigo del objeto que le pasamos
    let finfCountry = (countryCode) => listOfCountries.find((obj) => obj.cca3 === countryCode);
    const foundCountry = finfCountry(countryCode);

    //como nos devuelve un array seteamos la posicion 0
    const country = foundCountry[0];

    return (
        <div className="col-7">
          <h1>{foundCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
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
                  <ul>
                      {foundCountry.borders.map((eachBorder, index) => {
                     let border = listOfCountries.find((obj) => obj.cca3 === eachBorder);
                     console.log("border", border)
                      return (
                          <li><Link to={border.cca3}>{border.name.common}</Link></li>
                      )
                  })}  
                  </ul>

                  </td>
                </tr>
              </tbody>
            </table>
        </div>
    )
}



export default CountryDetail;