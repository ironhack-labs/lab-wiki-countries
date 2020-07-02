import React, { Component } from "react";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import countries from "./countries.json"
import CountryDetail from './components/CountryDetail'

/*import CountriesList from ".components/CountriesList";
*/
// <Link> - this will change the URL but it won't refresh the page
// <Route> - makes sure to render the correct component depending on the URL
// <Switch> - depending on the url it will match you to the correct <Route>

class App extends Component {

  displayCountries = () => {

    return countries.map((eachCountry) => {
      return <Link className="list-group-item list-group-item-action" to={`/${eachCountry.cca3}`}>{eachCountry.name.common}</Link>
        
    })
  }
  
  render(){
  return (
    <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">
              WikiCountries
            </Link>
          </div>
        </nav>
        <div className="layout" className='col-5'>
          {this.displayCountries()}
          <Switch>
            
            <Route
              exact
              path="/:id"
              render={(props) => <CountryDetail country={countries.find((eachCountry) => {
                                              return eachCountry.cca3 === window.location.href.slice(22,26)
                                            })} {...props} />}
            />  
          </Switch>
        </div>
      </div>
  )
  }
}

export default App;