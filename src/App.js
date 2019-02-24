import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Country from './components/Country';
import Countries from './components/Countries'
import countries from './data/countries.json';

// necessary information of objects, example france

	// 	"name": {
  // 		"common": "France",
  // 	},
	// 	"cca3": "FRA",
	// 	"capital": ["Paris"],
	// 	"translations": {
	// 	"spa": { "common": "Francia"},
	// 	"borders": ["AND", "BEL", "DEU", "ITA", "LUX", "MCO", "ESP", "CHE"],
	// 	"area": 551695,
  // 	"flag": "\ud83c\uddeb\ud83c\uddf7"
  
class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            
            <Route exact path="/" render={() => {
              return (
                  <div className="list-group">
                  {countries.map((count, key) => {
                    return (<Countries key={key} cca3={count.cca3} name={count.translations.spa.common} flag={count.flag}/>)
                  })}
                  </div>
                )
            }}/>
            
            <Route path="/:cca3" render={(props) => {
              return (
                  <Country countries={countries} {...props}/>
              )
            }}>
            </Route>
          
            </Switch>
        </Router>
      );
    }
  }

export default App;
