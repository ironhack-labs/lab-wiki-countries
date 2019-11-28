import React from "react";
import data from "./countries.json";
import {Link} from "react-router-dom"

let countryName = "";

const CountryDetail = props => {
    const countryId = props.match.params.id

    const country = data.find(el => {
        return el.cca3 === countryId;
    });
    
    return (
    <div className="col-7">
    <h2>{country.name.official}</h2>
    <table className="table">
    <thead></thead>
        <tbody>
            <tr>
                <td style={{width: "30%"}}>Capital</td>
                <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {country.borders.map(borderCountry => {
                    data.find(country => {
                            if (borderCountry === country.cca3) {
                                return countryName = country.name.official;
                                
                            } 
                        })
                                return (<div key={borderCountry}>
                                <li><Link to={`/${borderCountry}`}>{countryName}</Link></li>
                            </div> )
                    })}
                   
                    </ul>
                  </td>
                </tr>
              </tbody>

    </table>
   



    </div>
    );
}

export default CountryDetail;