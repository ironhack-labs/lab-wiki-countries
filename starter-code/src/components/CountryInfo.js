import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountryInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      country: this.props.location.state.listOfCountries
    }
  }

  makeCountryNameArr = (countryCodeArr) => {
    let countryNameArr = countryCodeArr.map(countryCode => this.getCountryData(countryCode).name.common)
    return countryNameArr;
  }

  getCountryData = (countryCode) => {
    let countryData = this.props.location.state.listOfCountries.find((country) => country.cca3 === countryCode);
    return countryData;
  }

  render() {
    let bordersArr = this.props.location.state.countryNameArr.map((borderCountry, index) => {
      let countryData = this.getCountryData(this.props.location.state.borders[index]);
      return <li key={index}>
        <Link to={{
          pathname: `/about/${this.props.location.state.borders[index]}`,
          state: {
            borders: countryData.borders,
            countryName: countryData.name.common,
            capital: countryData.capital,
            area: countryData.area,
            countryNameArr: this.makeCountryNameArr(countryData.borders),
            listOfCountries: this.state.country
          }
        }} >
          {borderCountry}
        </Link>
      </li>
    }
    )

    return (
      <div className="col-7">
        <h1>{this.props.location.state.countryName}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{this.props.location.state.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{this.props.location.state.area} km
              <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {bordersArr}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryInfo;