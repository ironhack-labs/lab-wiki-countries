import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav"
import Home from "./components/Home"
import CountryDetails from "./components/CountryDetails"
import Country from "./components/Country"
import countries from "./countries.json"
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      countries: countries
    }
  }

  render() {
   const styles={
      overflow:"scroll",
      "max-height":"100vh"
   }

    return (
      <Router>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col-5" style={styles}>
              <div className="list-group">
                <h1 className="border">{countries.map((country, key) => (
                  <Country className="border"
                    key={key}
                    cca3={country.cca3}
                    name={country.name.common} />))}
                </h1>
              </div>
            </div>
          </div>
          </div>
        <Switch>
          <Route path="/country-details/:cca3" component={CountryDetails} />
        </Switch>
      </Router>
      
    )
  }
}

export default App
