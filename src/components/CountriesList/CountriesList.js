import React from 'react';
import './CountriesList.css';
import { Link } from 'react-router-dom';
import countries from '../../countries.json';
import { BrowserRouter as Router} from 'react-router-dom';


class CountriesList extends React.Component {

  state = {
    countriesList: countries,
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
          <ul>
            {this.state.countriesList.map((country, index) =>
              <li key={index}>
                <Link to={country.cca3}>{country.name.common}</Link>
              </li>)}
          </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CountriesList;