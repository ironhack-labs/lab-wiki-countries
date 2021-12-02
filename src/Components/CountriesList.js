import { Component } from 'react';
import { Link } from 'react-router-dom';
import CountriesApi from '../countries.json';

class CountriesList extends Component {
  constructor() {
    super();
    this.state = { CountriesApi };
  }

  render() {
    return this.state.CountriesApi.map((elm, index) => (
      <div className="list-group" key={index}>
        <Link
          className="list-group-item list-group-item-action"
          to={`/countrie-details/:${elm.name.official}`}
        >
          {elm.name.official}
        </Link>
      </div>
    ));
  }
}

export default CountriesList;
