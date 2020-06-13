import React from 'react';
import { NavLink } from 'react-router-dom';
import  countries  from '../countries.json';

export default function CountriesList() {
    return (
        <div id="root">
            <div>
            
            <div class="container">
            {countries.map((eachCountry) => {
                const flag = `https://www.countryflags.io/${eachCountry.cca2}/flat/64.png`
                return(
                <div class="row">
                    <div class="col-5" style={{'max-height': '90vh', overflow: 'scroll'}}>
                        <div class="list-group">
                            <NavLink class="list-group-item list-group-item-action" to={`/countries/${eachCountry.cca3}`}>
                                <img style={{width:'84px'}} src={flag} alt='country-flag'/>
                                 {eachCountry.name.common}
                            </NavLink>
                        </div>
                    </div>

                {/* <div class="col-7" key={eachCountry.id}>
                    <h1>{eachCountry.name.common}</h1>
                    <table class="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                            <td style={{width: '30%'}}>Capital</td>
                            <td>{eachCountry.capital}</td>
                            </tr>
                            <tr>
                            <td>Area</td>
                            <td>{eachCountry.area} km
                                <sup>2</sup>
                            </td>
                            </tr>
                            <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                {eachCountry.borders.map((eachBorder) =>{
                                    return(
                                        <li><NavLink to={`/countries/${eachBorder.borders}`}>{eachBorder}</NavLink></li>
                                    )
                                })}
                                </ul>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div> */}
                </div>
                )
                })}
            </div>
            </div>
        </div>
    )
}