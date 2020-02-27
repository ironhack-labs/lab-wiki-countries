import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Countrys from './Countrys';
import countries from './countries.json'
import CountryDetail from './CountryDetail';

class App extends React.Component{
state={
  countries,
}

  render(){
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="all">
        <div className="container">
          <div className="row">
            <div className="col-5" >
              <div className="list-group">
              {this.state.countries.map(country =>(
           <Countrys  cca3={country.cca3} name={country.name} flag={country.flag} ></Countrys>
          ))}   
              </div>
            <div class="col-7">
            <CountryDetail  name={countries.name} capital={countries.capital} cca3={countries.cca3} borders={countries.borders}></CountryDetail>
          </div>


        <Switch>
        <Route
              exact
              path="/:id"
              render={props => {
                let {...filteredCountry} = this.state.countries.filter(country => country.cca3 === props.match.params.id)
                console.log(filteredCountry[0].borders)

                return (
                  <CountryDetail
                    name={filteredCountry[0].name.common}
                    capital={filteredCountry[0].capital}
                    area={filteredCountry[0].area}
                    borders={filteredCountry[0].borders}
                  ></CountryDetail>
                  
                );
                
              }}
            />
          </Switch>
  
  
  
              </div>
            </div>
            </div>
  
      </div>
      </div>
    );
  }
  
}

export default App;
