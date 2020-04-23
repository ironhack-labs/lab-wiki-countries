import React, { Component } from 'react';
// import countries from './countries.json';

class CountryDetail extends Component {

  render() {
    console.log(this.props.countries);
    return (
      <div className="col-7">
            <h1>Country Name</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>Paris</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>551695 km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {/* <li><a href="/AND">Andorra</a></li> */}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    );
  }
}

export default CountryDetail;