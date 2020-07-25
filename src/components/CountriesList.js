import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class CountriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      codeDetail: '',
    };
  }

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/').then((response) => {
      this.setState({
        countries: response.data,
      });
    });
  }

  render() {
    const countries = this.state.countries.map((item) => (
      <li key={item.alpha3Code}>
        <Link to={'/' + item.alpha3Code}>{item.name}</Link>
      </li>
    ));

    return (
      <div className="p-2">
        <h1>List</h1>
        <ul>{countries}</ul>
      </div>
    );
  }
}

export default CountriesList;
