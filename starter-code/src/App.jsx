import React, { Component } from 'react';
import countries from './countries.json';
import { Switch, Route, Link } from 'react-router-dom';
import Welcome from './Views/Welcome';
import CountryDetail from './Views/CountryDetail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      countries: countries
    };
  }

  handleSearch(e) {
    e.preventDefault();
    const key = e.target.name;
    this.setState({
      [key]: e.target.value
    });
  }

  get filterCountries() {
    var re = new RegExp(this.state.search, 'gi');
    return this.state.countries.filter(country => {
      return re.test(country.name.common) ||
        re.test(country.name.official) ||
        re.test(country.cca3) ||
        re.test(country.cca2)
        ? true
        : false;
    });
  }

  render() {
    return (
      <div className="">
        <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link to={`/`} className="font-semibold text-xl tracking-tight">
              WikiCountries
            </Link>
          </div>
        </nav>
        <div className="flex">
          <div className="w-1/4 bg-gray-200 border-r-2 border-r-gray-300 min-h-screen">
            <div className="px-2 py-3">
              <input
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none leading-normal"
                type="text"
                placeholder="search countries"
                name="search"
                onChange={e => this.handleSearch(e)}
              />
            </div>
            <ul className="flex-col p-2">
              {this.filterCountries.map(country => {
                return (
                  <li
                    className="mb-3 py-1 px-2 bg-gray-100 hover:bg-white rounded border"
                    key={country.cca3}
                  >
                    <Link
                      className="inline-block border-gray-400 rounded py-1 px-3 w-full flex"
                      to={`/${country.cca3}`}
                    >
                      {country.name.common}
                      <span className="ml-auto">{country.flag}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-3/4 bg-white">
            <Switch>
              <Route exact path="/" component={Welcome}></Route>
              <Route path="/:country" component={CountryDetail}></Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
