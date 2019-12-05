import React, { Component } from 'react';
import Header from './Header/Header';
import CountryDetail from './CountryDetail/CountryDetail';
import { Route, Link } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';

import countryList from './countries.json';

class App extends Component {
  state = {
    countries: countryList
  }

  render() {
    //console.log(this.state.countries)
    const listOfCountries = this.state.countries.map(country =>       
        <ul>
          <Link to={`/country/${country.cca3}`}>          
            <li key={country.cca3}> <img src={`https://www.countryflags.io/${country.cca2}/flat/32.png`} alt=""/> {country.name.common}</li>
          </Link>
        </ul>      
    )

    return (
      <div className="App"> 
        <header>
          <Header />
        </header>

        <main className="container">
          <div className="row">
            <div className="col-6">
              <div className="list-of-countries">
              {listOfCountries}
              </div>              
            </div>
            <div className="col-6">
              <Route path='/country/:id' component={CountryDetail}></Route>              
            </div>
          </div> 
        </main>
      </div>
    );
  }
}

export default App;
