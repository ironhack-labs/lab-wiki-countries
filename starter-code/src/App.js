import React from 'react';
import './App.css';

import CountryDetail from './component/CountryDetail';
import { Switch, Route } from 'react-router-dom';
import api from './Services/api';
import { Link } from 'react-router-dom';
import countries from './countries.json';

class App extends React.Component {
  state = {
    contry: {}
  }

  updateCountry = (countryCode) => {
    console.log('updateCountry')
    const newState = {
      country: {
        code: countryCode
      }
    }
    this.setState(newState)
  }

  render() {
    return (
      <div className="App">
        {/* <CountryDetail /> */}

        <div>
          <div>
            <nav className="navbar navbar-dark bg-primary mb-3">
              <div className="container">
                <a className="navbar-brand" href="/">WikiCountries</a>
              </div>
            </nav>
            <div className="container">
              <div className="row">
                <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                  <div className="list-group">
                    {countries.map(item => (
                      <Link className="list-group-item list-group-item-action" to={`/${item.cca3}`} onClick={() => this.updateCountry(item.cca3) }>🇦🇼 {item.name.common}</Link>
                    ))}
                  </div>
                </div>




                <Switch>
                  <Route exact path='/' component={CountryDetail} />
                  <Route exact path='/:countryCode' render={() => <CountryDetail update={this.updateCountry}  />} />
                </Switch>




              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }
}

export default App;
