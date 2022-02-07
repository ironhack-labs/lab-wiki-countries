import React from 'react';

export default function CountryDetails ({countries}) {

    return (
        <div class="col-7 mt-4">
        <h1>France</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>Paris</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                551695 km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  <li><a href="/AND">Andorra</a></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}