import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import Navbar from './NavbarComponent/navbar'
import countries from './countries.json'
import CountriesList from './CountriesListComponent/countrieslist'
import CountryDetails from './CountryDetails/countryDetails'
import { Component } from 'react';

class App extends Component {

  constructor() {
    super()
    this.state = {
      countries: ""
    }
  }

  componentDidMount() {
    this.setState({
      countries: [...countries]
    })

  }

  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />
            <Route path="/details/:id" component={CountryDetails} />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
