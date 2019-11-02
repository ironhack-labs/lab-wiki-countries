import React, {Component} from 'react';
import './App.css';
import { CountryList, Header, CountryDetail } from './components';
import { Switch, Route } from 'react-router-dom';
import countries from './data/countries.json'

class App extends Component {
  state = {
    country: ''
  }

  selectedCountry = (countryId) => {

  }
 
  render() {
    return (  
      <div className="App">
        <Header />
        <div className="container">
          <div className="row">
            <CountryList countries={countries} />
            <Switch>
              <Route exact path='/:countryId' render={(props) => <CountryDetail {...props} countries={countries} />} />
           </Switch>
          </div>
        </div>      
      </div>
    );
  }
}

export default App;
