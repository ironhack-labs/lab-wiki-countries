// Your only Route that will show a component that will receive the country code (cca3) in the URL. That is going to represent the id of the country (example: /ESP for Spain, /FRA for France).
import React, { Component } from "react";
import ListOfCountries from "./../components/ListOfCountries";



export class CountryDetail extends Component {
  render() {
    const tdStyle = {
      width: "30%"
    };
    return (
      <div>
        <div class="container">
          <div class="row">
            <div
              class="col-5"
              style={{ maxHeight: "90vh", overflow: "scroll" }}
            >
              <ListOfCountries />
            </div>
            <div class="col-7">
              <h1>France</h1>
              <table class="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td style={tdStyle}>Capital</td>
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
                        <li>
                          <a href="/AND">Andorra</a>
                        </li>
                        <li>
                          <a href="/BEL">Belgium</a>
                        </li>
                        <li>
                          <a href="/DEU">Germany</a>
                        </li>
                        <li>
                          <a href="/ITA">Italy</a>
                        </li>
                        <li>
                          <a href="/LUX">Luxembourg</a>
                        </li>
                        <li>
                          <a href="/MCO">Monaco</a>
                        </li>
                        <li>
                          <a href="/ESP">Spain</a>
                        </li>
                        <li>
                          <a href="/CHE">Switzerland</a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryDetail;
