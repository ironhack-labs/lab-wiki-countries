import React, { Component } from 'react';
import './App.css';
import { Switch, Route, NavLink } from 'react-router-dom';
import allCountries from './countries.json';
import CountryDetail from './CountryDetail';


function countryUrl(country) {
  return `/country/${country.cca3}`;
}
class App extends Component {

  constructor(props) {
    super(props);

    this.state = { countriesArray: allCountries };
  }

  render() {

    const { countriesArray } = this.state;

    return (
      <div className="App">
        <header>
          <h1>Wiki Countries</h1>
        </header>

        <div className="container-fluid">
          <div className='row'>
            
            <aside className='col-5'>
              <h2>Countries List</h2>
              <nav className="list-group">
                {countriesArray.map(oneCountry => {
                  return (
                    <NavLink key={oneCountry.cca3} to={countryUrl(oneCountry)}>{oneCountry.name.common}</NavLink>                 
                  )
                })}              
              </nav>
            </aside>

            <main className='col-7'>
              <h2>Countries Detail</h2>
              <Switch>
                <Route path='/country/:countryId' component={CountryDetail} />
                <Route/>
              </Switch>
            </main>

          </div> {/*  end row */}
        </div> {/*  end container-fluid */}

      </div> //  end app 
    );
  }
}

export default App;
