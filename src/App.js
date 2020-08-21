import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import CountriesList from './components/CountriesList'
import CountriesDetails from './components/CountriesDetails'
import {Route, Switch, Link} from 'react-router-dom'


class App extends React.Component {

  state = {
    countries: []
  } 

  render(){
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col-5" style={{maxHeight: '94vh', overflow: 'scroll'}}>
              <CountriesList countries={this.state.countries}/>
            </div>
            <div className="col-7">
              <Route path="/countries/:cca3" render={(autoProps) => {
                return <CountryDetails countries={this.state.countries} {...autoProps}/>}}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
