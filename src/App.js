import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Countries from './countries.json'
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';
import { Route, Switch } from 'react-router-dom';


class App extends React.Component {

  state = {
    countries: Countries,
    filterCountries: [],
    search: '',
  }

  componentDidUpdate() {
    console.log(this.state.filterCountries);
  }

  handleOnChange = (event) => {
    this.setState({ search: event.target.value })
  }

  render() {
    const filterCountries = this.state.countries.filter(filter => filter.translations['spa'].official.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase()))

    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main className="mt-5">
          {/* {Countries.map(country => <p>{ country.name['common'] }</p>)} */}
          <div className="container">
            <div className="row">
              <div className="col-6 text-left">
                <h1>Paises</h1>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                      <path d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                    </svg></span>
                  </div>
                  <input type="text" className="form-control" placeholder="Buscar" aria-label="search" aria-describedby="basic-addon1" onChange={this.handleOnChange} />
                </div>
                <CountriesList countries={filterCountries.sort((a, b) => (a.translations['spa'].official > b.translations['spa'].official) ? 1 : -1)} />
              </div>
              <div className="col-6 text-left">
                <h1>Datos del país</h1>
                <Switch>
                  <Route exact path="/:countryCode" component={CountryDetail} />
                </Switch>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

}

export default App;
