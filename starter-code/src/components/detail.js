import React from "react";
import {Link} from "react-router-dom";

  const Detail = (props) => {
    
      var countryCode = props.match.params.code

      var filteredCountry = props.countries.filter(country=> country.cca3 === countryCode)[0]

      return (
        <>       
          <div className="ml-3 pt-3 w-50">
          {props.countries.length > 0 ?
          <div>
          <h1>{filteredCountry.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{width: "30%"}}>Capital</td>
                <td>{filteredCountry.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{filteredCountry.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                  {filteredCountry.borders.length === 0 ? "No borders" : filteredCountry.borders.map(border=>{
                    let countryName = props.countries.filter(country => country.cca3 === border)[0]
                     return  <li><Link to={`/detail/${border}`}>{countryName.name.common}</Link></li>
                  })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          </div> 
           : "No info yet"}
          
        
        </div> 
        </>
      )
  }
  
export default Detail