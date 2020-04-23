import React, { Component } from 'react';

class CountryDetail extends Component {

  showCountries = () => {
    const { countries } = this.props;
    // console.log(countries)
    // const flag = `https://www.countryflags.io/${item.cca2}/flat/64.png`
    return countries.map(item => {
      return <a className="list-group-item list-group-item-action" href="/ABW"><img className='flag' src={`https://www.countryflags.io/${item.cca2}/flat/64.png`} alt="flag"/> {item.name.common}</a>
    })
  }

  render() {
    return (
      <div id="root">
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="list-group">
              {this.showCountries()}
            </div>
          </div>
          <div className="col-7">
            <h1>Country</h1>
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
        </div>
      </div>
    </div>
    );
  }
}

export default CountryDetail;