import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class CountriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/').then((response) => {
      this.setState({ countries: response.data });
    });
  }

  render() {
    const countries = this.state.countries.map((item) => (
      <Link
        to={'/' + item.alpha3Code}
        key={item.alpha3Code}
        className="list-group-item list-group-item-action"
      >
        <img
          src={item.flag}
          alt="flag"
          style={{
            width: '15px',
            marginRight: '10px',
          }}
        />
        {item.name}
      </Link>
    ));

    return (
      <div
        className="countryList"
        style={{
          height: '91vh',
          overflowY: 'scroll',
        }}
      >
        {countries}
      </div>
    );
  }
}

export default CountriesList;