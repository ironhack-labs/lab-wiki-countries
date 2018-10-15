import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import countries from '../countries.json'
import Nav from './Nav'
//import CountryDetail from './CountryDetail'
import Routes from '../Routes'

class App extends Component {

  state = {
    countries
  }

  render() {
    return (
      <div className="App">
      <h1>WikiCountries</h1>
      <section>
          <Nav info={this.state.countries} />
      </section>


      <section>
        <Routes/>
      </section>
      </div>
    );
  }
}

export default withRouter(App);