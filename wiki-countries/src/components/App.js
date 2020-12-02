import './App.css';
//import Countries from './countries.json'
import Navbar from './../components/navbar/Navbar'
import CountriesList from './countriesList/CountriesList'
import CountryDetails from './countryDetails/CountryDetails'

import React, { Component } from 'react'

import { Switch, Route } from 'react-router-dom'



class App extends Component {

  constructor() {
    super()

    this.state = {

      allCountries: []

    }
  }

  componentDidMount() {

    fetch('https://countries.tech-savvy.tech/countries')
      .then((response) => response.json())
      .then(data => this.setState({allCountries: data}))
  
  }

  render() {

    const countriesCopy = JSON.parse(JSON.stringify(this.state.allCountries))

    const sortedCountries = countriesCopy.sort((a, b) => a.name.official.localeCompare(b.name.official))

    return (
      <>

        <Navbar />

        <main>

          <div className="container">
            <div className="row">
              <div className="col-5 countries-links">
                <div className="list-group">

                  {sortedCountries.map(elm => <CountriesList key={elm.ccn3} name={elm.name.official} flag={elm.cca2} countryCode={elm.cca3} />)}

                </div>
              </div>

              <Switch>
                <Route path="/countries/details/:cca3" render={props => <CountryDetails {...props} />} />
              </Switch>

            </div>
          </div>



        </main>

      </>
    )
  }

}

export default App;
