import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import countries from "./countries.json";
import { Route, Switch,Link } from "react-router-dom";

const CountryDetail = (props) => {
    const country = props.match.params.country;
    console.log(country);
    const countryDetail = countries.find(el => {
        if (el.cca3 === country) return true
      //return el.cca3 === country;
    });
    const borders= countryDetail.borders.map(code=>{
        const borderCountry=countries.find(el=>{
            if(code===el.cca3) return true
            //return code === el.cca3;

        })
       return( <li><Link to={code}>{borderCountry.name.common}</Link></li>)
    })
    //console.log(countryDetail)
    return (
        <div>
            <div class="col-7">
            <h1>{countryDetail.name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{countryDetail.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{countryDetail.area} km
                    <sup>2</sup>
                  </td>
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
        </div>
    )
}

export default CountryDetail
