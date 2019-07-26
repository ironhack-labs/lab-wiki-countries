import React, { Component } from 'react';
import './App.css';
import Data from '../src/countries.json';
import Countries from './components/countries/Countries';
import Country from './components/contry/Country';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      countries: Data,
      currentCountry: ''
    };
  }

  renderCoutries(){
    let countriesClone = [...this.state.countries];

    return countriesClone.map((country, i)=>{
      return <Countries key={i} cca3={country.cca3} name={country.name.common} flag={country.flag} />
    })
  }  

  render() {
    return (
      <div className="App">
        <div className="country-list">
          {this.renderCoutries()}
        </div>
        <div className="country-listing">
          <Route exact path='/country/:theCountry' component={Country}/>
        </div>
      </div>
    );
  }
}

export default App;
