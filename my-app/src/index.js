import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import countries from './data/countries.json';

//A component that will receive cca3 as a props, that is going to respresent the id of the country (example: ESP for Spain, FRA for France).

class CountryDetail extends React.Component {
  render() {
    let country = countries.find(c => c.cca3 === this.props.match.params.cca3);
    // let bordersArray = [];
    let bordersArray = country.borders.slice();

    let borders = countries.filter(c => bordersArray.includes(c.cca3));

    return (
      <div>
        <h2>{country.name.common}</h2>
        <hr />
        <h5>Capital: {country.capital}</h5>
        <hr />
        <h5>
          Area: {country.area} km
          <sup>2</sup>
        </h5>
        <hr />
        <h5>
          {' '}
          Borders:{' '}
          <span>
            <ul>
              {borders.map((c, i) => (
                <li key={i}>
                  <Link to={'/country/' + c.cca3}>{c.name.common}</Link>
                </li>
              ))}
            </ul>
          </span>
        </h5>
      </div>
    );
  }
}

//For the general layout

class App extends React.Component {
  render() {
    return (
      <div className="container border">
        <div className="list-group">
          <span className="list-group-item list-group-item-action active">WikiCountries</span>
          <div className="row">
            <div className="col-5 pre-scrollable">
              {countries.map((c, i) => (
                <div className="list-group-item list-group-item-action" key={i}>
                  <Link to={'/country/' + c.cca3}>{c.name.common}</Link>
                </div>
              ))}
            </div>
            <div className="col-7">
              <Route path="/country/:cca3" component={CountryDetail} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
