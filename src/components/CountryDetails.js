import React from 'react';

import {Link} from 'react-router-dom'; 

function CountryDetails(props) {

    const countryId = props.match.params.countryId;
    
    const foundCountry = props.countries.find((country) => {
        return country.cca3 === countryId
    });

    return (
        <div className="col-7">
          <h1> {foundCountry && foundCountry.name.official} </h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{width: "30%"}}>Capital</td>
                <td>{foundCountry && foundCountry.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{foundCountry && foundCountry.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {foundCountry && foundCountry.borders.length === 0
                    ? <p>Jamie, Claudia and Alvaro want to greet you. Merry Xmas</p>
                    : foundCountry && foundCountry.borders.map((code) => 
                    props.countries.find((country) => 
                    code === country.cca3)).map((item, i) => { 
                        return (<li key={i}><Link to={`/${item.cca3}`}>{item.name.common}</Link></li>) })
                    } 
                    
                    {/* <li><a href="/AND">Andorra</a></li> */}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    )
}

export default CountryDetails;


        