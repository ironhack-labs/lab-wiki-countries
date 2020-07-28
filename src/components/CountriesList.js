import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class CountriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
  }
  async componentDidMount() {
    const { data: countries } = await axios.get(
      'https://restcountries.eu/rest/v2'
    );
    this.setState((state) => ({
      ...state,
      countries: countries,
    }));
  }

  render() {
    const countryList = this.state.countries.map((country) => (
      <div className="col-5" id="list-of-countries">
        <li className="list-group" key={country.alpha3Code}>
          <Link
            className="list-group-item list-group-item-action"
            to={'/' + country.alpha3Code}
          >
            <span>
              <img src={country.flag} alt={country.name + ' flag'} />
            </span>
            {country.name}
          </Link>
         
        </li>
      </div> ))
 

    return <ul>{countryList}</ul>;
  }
}
