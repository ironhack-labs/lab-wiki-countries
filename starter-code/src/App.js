import React, { Component } from 'react';
import countries from "./countries.json";
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import CountryDetails from './CountryDetails'
import Search from './Search'

class App extends Component {

 state={
   countries
 }

 showCountries = () => {
  const allCountries = this.state.countries.map((eachCountry,i) => {
      return (
      <Link className="list-group-item list-group-item-action" key={i} to={`/country/${eachCountry.cca3}`}> {eachCountry.flag} { eachCountry.name.official } </Link>
      )
  })
  return allCountries
}


searchInput = (e) => {
  console.log(e.target.value) 
  let search  = e.target.value
  let filteredCountries = countries.filter(countries => {
    if (countries.name.official.toLowerCase().includes(search.toLowerCase())) {
      return countries
    }
  })

  this.setState({
    countries: filteredCountries
  })
}
 

render(){
  return (
    <div className='App'>
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
            <Search searchInput={(e) => this.searchInput(e)} searchIt={() => this.searchIt(this.state.search)}/>
          
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-5" >
              <div className="list-group">
                {this.showCountries()}
              </div>
            </div>

            <Switch>
              <Route exact path="/country/:id" component={CountryDetails}/>
            </Switch>
            {/* <CountryDetails countryInfo={this.state.countries}/> */}


          </div>
        </div>
      </div>



    </div>
  );
}
}

export default App;

