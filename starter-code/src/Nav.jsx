// import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import CountryDetail from './CountryDetail';
import axios from 'axios';

class Nav extends Component {
  state = {
    countries: '',
    flag: '',
    name: '',
  };

  componentDidMount () {
    axios
      .get (
        'https://raw.githubusercontent.com/mledoze/countries/master/countries.json'
      )
      .then (result => {
        console.log (result.data);
        this.setState ({countries: result.data});
      })
      .catch (err => {
        console.log (err);
      });
  }

  handleClick = () => {};

  render () {
    let countries;
    if (this.state.countries) {
      countries = this.state.countries.map (c => {
        return (
          // <div className="row">
          //   <div className="col-12">
          (
            <div
              key={c.cca3}
              className="nav flex-column nav-pills col-4"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <Link
                // adding state as a props  for selected country c,together with the path
                to={{pathname: `/country/${c.cca3}`, state: {c}}}
                // name={c.name.common}
                // capital={c.capital}
                // area={c.area}
                // borders={c.borders}
                className="nav-link"
                id="v-pills-profile-tab"
                data-toggle="pill"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                {c.flag}{c.name.common}
              </Link>

            </div>
          )
          //   </div>
          // </div>
        );
      });
    }
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12">
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <h1
                className="nav-link active"
                id="v-pills-home-tab"
                data-toggle="pill"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                WikiCountries
              </h1>
              {countries}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Nav;
