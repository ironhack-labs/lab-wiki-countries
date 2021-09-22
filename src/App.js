import { Route } from 'react-router';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import CountriesList from './components/CountriesList/CountriesList'
import CountryDetails from './components/CountryDetails/CountryDetails';
import countries from './countries.json'
import React from 'react';

class App extends React.Component {

  state = {
    countries: []
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      countries: countries
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
          <div className="">
            <div className="row">
              <div className="col-4">
                  <Route path="/" render={() => <CountriesList countries={countries} />}></Route>
              </div>
              <div className="col-7">
                  <Route exact path="/:cca3" render={(props) => <CountryDetails {...props} />}></Route>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
