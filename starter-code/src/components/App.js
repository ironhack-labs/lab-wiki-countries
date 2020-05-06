import React from 'react'
import './App.css'
import countries from '../countries.json'
import { Switch, Route } from 'react-router-dom'
import Countrys from './countrydetail/Countrys'
import CountryDetails from './countrydetail/CountryDetails'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.countriesList = [...countries]
    this.state = {
      listOfCountries: this.countriesList
    }
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5">
              {
                this.state.listOfCountries.map((eachCountry, idx) => <Countrys key={idx} {...eachCountry} />)
              }
            </div>
            <Switch>
              <Route exact path="/:cca3" render={props => <CountryDetails {...props} />} />
            </Switch>
          </div>
        </div>
      </>
    )
  }
}
export default App;