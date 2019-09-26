import React, {Component} from 'react';
import Navbar from './Navbar.js';
import countries from '../../countries.json';
import {Link} from 'react-router-dom';
export default class Layout extends Component {
  state = {
    countries
  };
  render() {
    const {countries} = this.state;
    return (
      <div id="root">
        <div>
          <Navbar />
          <div class="container">
            <div class="row">
              <div class="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
                <div class="list-group">
                  {countries.map(country => (
                    <Link hey={country.cca3} class="list-group-item list-group-item-action" to={country.cca3}>
                      <span role="img" aria-label={country.name.common}>
                        {country.flag}
                      </span>{' '}
                      {country.name.common}
                    </Link>
                  ))}
                </div>
              </div>
              <div class="col-7">{this.props.children}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
