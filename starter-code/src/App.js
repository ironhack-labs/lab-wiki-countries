import React, { Component } from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom';
import countries from './countries.json';
import CountryDetail from './pages/CountryDetail'

class App extends Component {

  state = {
    countries: countries
  }

  render() {

  return (
    
    <div>
      <div className="sidebar">
      <Link to="/testRoute">Test </Link>
      {
        countries.map((country) => 
        <Link to={`/{country-detail/${country.cca3}`}>
          {country.flag} {country.name.official}
        </Link>
        
        )
        
      }
      
      </div>
      <div>
        <Route path="/testRoute"component={CountryDetail} ></Route>
        {/* <Route path={`/country-detail/:cca3`} render={(props) => <CountryDetail {...props} countries={this.state.countries}/>} /> */}
      </div>
    </div>
  )
    }
}

export default App;
