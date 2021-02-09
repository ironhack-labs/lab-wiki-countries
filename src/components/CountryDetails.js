import React from 'react';
import countries from '../countries.json';

class CountryDetails extends React.Component {
    state = {
      show: false,
    };
  
    componentDidMount() {
      const country = countries.find(
        (country) => country.cca3 === this.props.match.params.countryName
      );
  
      if (country) {
        this.setState({ ...country, show: true });
      }
    }
  
    componentDidUpdate(prevProps, prevState) {
      const country = countries.find(
        (country) => country.cca3 === this.props.match.params.countryName
      );
  
      if (prevState.cca3 !== country.cca3) {
        this.setState({ ...country, show: true });
      }
    }

  render() {
    return (
      <div className="col-7">
      <p>Hello World</p>
        {/* <h1>{this.state.name}</h1>
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
        </span> */}
      </div>
    );
  }
}

export default CountryDetails;
