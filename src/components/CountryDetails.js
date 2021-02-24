import { Link } from 'react-router-dom';
import React from 'react';

const theCountry= ({ name, capital, area, borders }) => { 

return (
<div class="col-7">      
        <h1>{name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                    <td>{capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>{borders}</ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div >
);
}

export default theCountry;