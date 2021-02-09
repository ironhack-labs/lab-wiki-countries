import React from 'react';
import countries from '../countries.json';

class CountryDetails extends React.Component {
  state = {
    name: '',
    capital: '',
    area: '',
    borders: [],
  };

  componentDidMount() {
    const country = countries.find(
      (country) => country.name === this.props.match.params.dogName
    );

    if (country) {
      var newCountryList = { ...country };
      this.setState({
        name: newCountryList.name.common,
        capital: newCountryList.capital,
        area: newCountryList.area,
        borders: newCountryList.borders,
      });
    }
  }

  render() {
    return (
      <div className="col-7">
        <h1>{this.state.name}</h1>
        <hr />
        <p>Capital</p>
        <span>
          <p>{this.state.capital}</p>
        </span>
        <hr />
        <p>Area</p>
        <span>
          <p>{this.state.area}</p>
        </span>
        <hr />
        <p>Borders</p>
        <span>
          <p>{this.state.borders}</p>
        </span>
      </div>
    );
  }
}

export default CountryDetails;
