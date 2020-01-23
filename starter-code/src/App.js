import React, { Component } from "react";
import logo from './logo.svg';
import countries from './countries.json';
import CountryListItem from './components/CountryList.js'
import CountryDetails from './components/CountryDetails.js'
import './App.css';

import { Switch, Route } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: countries,
    };
  }

    render() {
      const { countries } = this.state;
      return (
        <div id ="Page">
          <div id = "Title">
            Wikicountries
          </div>
          <div id = "Body">

            <div id = "Country-List">

              {this.state.countries.map(element => {
                return (<CountryListItem name={element.name.common} image={element.flag} code={element.cca3} />);
              })}
            </div>

            <div id = "Country-Overview">
            
            <Switch>
              <Route exact path="/:code" component={CountryDetails}/>
            </Switch>

            </div>
          </div>

      </div>
    );
  }
    // this.addFoodHandler = this.addFoodHandler.bind(this);
    // this.toggleFoods = this.toggleFoods.bind(this);

}


export default App;

