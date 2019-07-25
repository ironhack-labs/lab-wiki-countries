import React, { Component } from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

class CountryDetails extends Component {
  constructor (props) {
    super(props);

    this.state = {
      countries: countries,
      country: null,
      borders: null,
    }
    this.findCountry = this.findCountry.bind(this)
    this.findBorders = this.findBorders.bind(this)
  }

  findCountry(id) {
    for (let i = 0; i < countries.length; i++) {
      if (countries[i].cca3 === id) {
        return countries[i];
      }
    }
  }

  findBorders(country) {
    const countries = this.state.countries;
    const borders = [];
    for (let i = 0; i < country.borders.length; i++) {
      for (let j = 0; j < countries.length; j++) {
        if (country.borders[i] === countries[j].cca3) {
          borders.push([countries[j].cca3, countries[j].name.common]);
        }
      }
    }
    return borders;
  }

//   componentDidMount() {
//     const { params } = this.props.match;
//     const country = this.findCountry(params.countryId);
//     const borders = this.findBorders(country);
//     this.setState({ country: country, borders: borders });
//   }

  componentWillMount() {
    const { params } = this.props.match;
    const country = this.findCountry(params.countryId);
    const borders = this.findBorders(country);
    this.setState({ country: country, borders: borders });
  }

  componentWillReceiveProps(pickles) {
    const { params } = pickles.match;
    const country = this.findCountry(params.countryId);
    const borders = this.findBorders(country);
    this.setState({ country: country, borders: borders });
  }

  render () {
    return (
      <div className="col-7">
        <h1>{this.state.country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td className="info-capital">Capital</td>
              <td>{this.state.country.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{this.state.country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {
                    this.state.borders.map((element, index) => {
                      return <li key={index}><Link to={`/${element[0]}`}>{element[1]}</Link></li>
                    })
                  }
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}    

export default CountryDetails;