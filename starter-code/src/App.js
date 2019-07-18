import React, { Component } from 'react';
import './App.css';
import countries from './countries.json'
import Country from './Country';
import CountryDetail from './CountryDetail'
import { Switch, Route } from 'react-router-dom';

class App extends Component {

  constructor(){
    super()
    this.countriesCopy = [...countries];
    this.state = {
      countriesCopyState: this.countriesCopy,
    }
    console.log(this.state.countriesCopyState);
  }
  render() {
    return (
      <div id="root">
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">WikiCountries</a>
            </div>
          </nav>
            <div className="container">
              <div className="row">
                  <div className="col-5" style={{height: "90vh", overflow: "scroll"}}>
                    <div className="list-group">
                      {this.state.countriesCopyState.map((feature,idx) => <Country name={feature.name.common} cca3={feature.cca3} flag={feature.flag} key={idx} ind={idx}></Country>)}
                  </div>
                </div>
                <Switch>
                  <Route exact path='/:chosenCountry' render={(props) => {
                    var chosenCountry = props.match.params.chosenCountry
                    console.log(chosenCountry);
                    console.log(this.state.countriesCopyState[chosenCountry])
                    return <CountryDetail coun={this.state.countriesCopyState[chosenCountry]}></CountryDetail>
                  }} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
