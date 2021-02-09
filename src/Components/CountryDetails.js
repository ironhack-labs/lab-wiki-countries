import React from 'react';
import countries from '../countries.json';

class CountryDetails extends React.Component {
  state = {
    name: '',
    capital: '',
    area: null,
    borders: [],
  };

  // duvidas com extruturacao de ComponentDidMount e ComponentDidUpdate!
       

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