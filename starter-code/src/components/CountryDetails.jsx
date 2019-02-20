import React from 'react';
import Countries from "../countries.json";

const Details = (props) => {
    return(
      <div>
        {Countries.map((country, index) => {
          if (country.cca3 === props.match.params.id) {
            return (
              <div key={index}>
        <table>
          <thead>
              <tr>
                <th>{country.name.common}</th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>
                {country.capital[0]}
              </td>
            </tr>
            <tr>
              <td>Área</td>
              <td>
                {country.area}
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  <p>{`${country.borders}`}</p>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
              </div>
            )
          }
        })
        }
        
      </div>
    )
}

export default Details