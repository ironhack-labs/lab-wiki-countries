import React, { Component } from 'react';
import axios from 'axios';

export class CountriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
  }
  componentDidMount = () => {
    axios.get('https://restcountries.eu/rest/v2/').then((response) => {
      this.setState({ countries: response.data });
    });
  };

  showCountry = (cc3Code) => {};
  render() {
    const listCountries = this.state.countries.map((c) => (
      <a
        key={c.alpha3Code}
        className="list-group-item list-group-item-action"
        href={'/' + c.alpha3Code}
      >
        <img style={{ width: 25 }} src={c.flag} alt={c.name} /> {c.name}
      </a>
    ));
    return (
      <div className="col-5" style={{ maxHeight: 700, overflow: 'scroll' }}>
        <div className="list-group">{listCountries}</div>
      </div>
    );
  }
}

export default CountriesList;
