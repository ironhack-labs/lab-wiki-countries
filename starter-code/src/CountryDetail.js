import React, { Component } from 'react';
import countries from './countries.json'

const findCountryByCca3 = (cca3) =>{
    return countries.find(a => {return a.cca3 == cca3})
}

const countryDetails = (props) => {
    console.log(props)

    const cca3 = props.match.params.cca3
    const country = findCountryByCca3(cca3)

    const tdStyle = {
        width: '30%'
      }
    return(
        <div className="col-7">
        <h1>{country.name.official}</h1>
        <table className="table">
            <thead></thead>
            <tbody>
                <tr>
                    <td style={tdStyle}>{country.capital}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>{country.area}
    <sup>2</sup>
                    </td>
                </tr>
                <tr>
                    <td>{country.bouders}</td>
                    <td>
                        <ul>
                            <li><a href="/AND">{country.borders.map(a=>{return a})}</a></li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    )
       
}

export default countryDetails;
