import './App.css';
import Navbar from './Navbar/Navbar';
import Countrieslist from './CountriesList/CountriesList'
import Countrydetails from './CountryDetails/CountryDetails'
import { Switch, Route } from 'react-router-dom'
import { React, Component } from 'react'
import countries from './countries.json'

class App extends Component {

  constructor() {
    super()
    this.state = {
      countries: countries
    }
  }

  

  render() {
    return (
      <>
        <Navbar />
        <main className="container">
          <section className="row">
            <Countrieslist />
            <Switch>
              <Route path="/:country" render={props => <Countrydetails {...props} />} />
            </Switch>

          </section>
        </main>
      </>
    );
  }
}

export default App;