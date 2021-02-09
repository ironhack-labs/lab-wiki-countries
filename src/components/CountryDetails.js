import React from 'react';
import countries from '../countries.json';

class CountryDetails extends React.Component {
  state = {
    name: '',
    capital: '',
    area: null,
    borders: [],
  };

  componentDidMount() {
    console.log(this.props.match);
    const country = countries.find(
      (country) => country.cca3 === this.props.match.params.countryName
    );

    if (country) {
      const countrySpread = { ...country };
      this.setState({
        name: countrySpread.name.common,
        capital: countrySpread.capital,
        area: countrySpread.area,
        borders: countrySpread.borders,
      });
    }
  }

  //   componentDidUpdate(prevProps, prevState) {
  //     const country = countries.find(
  //       (country) => country.cca3 === this.props.match.params.countryName
  //     );

  //     if (prevState.cca3 !== country.cca3) {
  //       const countrySpread = { ...country };
  //       this.setState({
  //         name: countrySpread.name.common,
  //         capital: countrySpread.capital,
  //         area: countrySpread.area,
  //         borders: countrySpread.borders,
  //       });
  //     }
  //   }

  render() {
    return (
      <div className="col-7">
        <ul className="list-group">
          <li className="list-group-item text-left">
            <h1>{this.state.name}</h1>
          </li>
          <li className="list-group-item text-left">
            <p>Capital: {this.state.capital}</p>
          </li>
          <li className="list-group-item text-left">
            <p>Area: {this.state.area} km²</p>
          </li>
          <li className="list-group-item text-left">
            <p>Borders: {this.state.borders}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default CountryDetails;
