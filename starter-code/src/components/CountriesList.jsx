import React,{ Component } from 'react';
import countries from './../countries.json'
import Countries from './Country'
import './countries-list.css'
import CountryDetails from './CountryDeatils.jsx';

class CountriesList extends Component {
  constructor() {
    super();
    this.state = {
      arrCountries: countries
    }
    // this.addFoodHandler = this.addFoodHandler.bind(this);
  }

  render() {
    return ( 
      <div>
          <div class="container">
          <div class="row">
            <div class="col-5 colu1">
            <div class="list-group">
            {
              this.state.arrCountries.map((OneCountry, index) => {
              return <Countries key={index} {...OneCountry}/>
              })
              }
            </div>
            </div>
            <div class='col-7 list'>
            {/* {
              this.state.arrCountries.map((OneCountry, index) => {
                return <CountryDetails key={index} {...OneCountry}/>
              })
            } */}
            </div>
          </div> 
          </div>
      </div>
    )
  }

}

export default CountriesList;