import React, { Component } from 'react';

export default class CountryDetail extends Component {
  state = {
    countries: [],
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
      .then(response => response.json())
      .then(countries => {
        this.setState({ countries })
      })
      .catch(error => {
        console.log('error', error);
      })
  }

  countryLink = (country, i) => {
    const { cca3, flag, name } = country;
    return <a key={country + i} className='list-group-item list-group-item-action' href={`/${cca3}`}>{flag}&nbsp;{name.common}</a>
  }

  render() {
    const { countries } = this.state;
    console.log('countries', countries);
    const divStyle = { maxHeight: '90vh', overflow: 'scroll' };
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-5' style={divStyle}>
            <div className='list-group'>
              {countries.map((country, i) => this.countryLink(country, i))}
            </div>
          </div>
          <div className='col-7'>
            <h1>France</h1>
            <table className='table'>
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
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
                      <li><a href='/AND'>Andorra</a></li>
                      <li><a href='/BEL'>Belgium</a></li>
                      <li><a href='/DEU'>Germany</a></li>
                      <li><a href='/ITA'>Italy</a></li>
                      <li><a href='/LUX'>Luxembourg</a></li>
                      <li><a href='/MCO'>Monaco</a></li>
                      <li><a href='/ESP'>Spain</a></li>
                      <li><a href='/CHE'>Switzerland</a></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
