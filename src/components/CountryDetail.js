import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class CountriesDetail extends Component {
  render() {
    if(this.props.countries && this.props.countries.length > 0) {
    let {countries, cc} = this.props;
    let country = countries.find((country) => {return country.cca3 === cc});
    let borders = country.borders;
    return (
        <div class="col-7">
              <h1>{country.name.common}</h1>
              <table class="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td style={{width: "30%"}}>Capital</td>
                    <td>{country.capital[0]}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>
                      {country.area} km
                      <sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Borders</td>
                    <td>
                      <ul> 
                        {
                            borders.map((borderCC, index) => {
                                let border = countries.find((country) => {return country.cca3 === borderCC});
                                return (<li key={index}><Link to={`/${borderCC}`}>{border.name.common}</Link></li>);
                            })
                        }
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
    );
    } else {
        return('');
    }
  }
}