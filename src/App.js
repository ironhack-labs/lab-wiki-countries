import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import countries from './countries.json';
import CountryDetails from './components/CountryDetails'

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
      <Router>
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
      </Router>
    );

  }

}

export default App;
