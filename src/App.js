import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import countries from './countries.json'

import CountryDetails from './components/CountryDetails';

class App extends React.Component {
  
  state = {
    countries: []
  }


  componentDidMount = () => {
    this.setState(
      { countries: countries }
    )
  }

  render() {

    return (
      <div className="App">
        <Navbar />

        <div className=" container">
          <div className=" row">
            <CountriesList countries={countries} />

            <Switch>
              <Route exact path="/countries/:countryId"
                component={CountryDetails}
                countries={countries} />
            </Switch>

          </div>

        </div>
      </div>
    );

  }

}

export default App;
