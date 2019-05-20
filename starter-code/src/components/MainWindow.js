/*this component contains menu of countries on the left side (ListOfCountries) 
and info about country on right side (CountryInfo)*/

import React, { Component } from 'react';
import ListOfCountries from './ListOfCountries';
import CountryInfo from "./CountryInfo";
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';

class MainWindow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      isLoading: true,
    }
    this.getCountryName = this.getCountryName.bind(this);
    this.makeCountryNameArr = this.makeCountryNameArr.bind(this);
  }

  makeCountryNameArr = (countryCodeArr) => {
    let countryNameArr = countryCodeArr.map(countryCode => this.getCountryName(countryCode))
    return countryNameArr;
  }

  getCountryName = (countryCode) => {
    let countryName = this.state.data.find((country) => country.cca3 === countryCode);
    return countryName.name.common;
  }

  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
      .then(response => {
        this.setState({
          data: response.data,
          isLoading: false
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        {this.state.data && <div className="row">
          <ListOfCountries countriesInfo={this.state.data} makeCountryNameArr={this.makeCountryNameArr} />
          <Switch>
            <Route exact path="/about/:countryCode" component={CountryInfo} />
          </Switch>
        </div>}
      </div>
    );
  }
}

export default MainWindow;