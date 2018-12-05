import React, { Component } from 'react';
import './App.css';
import CountryDetail from './components/CountryDetail/CountryDetail';
import countries from './countries.json'
import { Link, Switch, Route } from 'react-router-dom';

export default class App extends Component {

  constructor(){
    super();

    this.state = {
      countries
    }

  }


  render() {

    return (
      
      <div>

        {
        this.state.countries.map((country, index) => {
          return (
            <div key={index}>
              <Link to={`/${country.cca3}`} style={{ textDecoration: 'none', color: 'purple'}}><h5>{country.flag}{country.name.common}</h5></Link>
            </div>
          )
        })}

      

        <Switch>
          <Route exact path='/:id' component={CountryDetail}/>
        </Switch>

     </div>
  );
    
  }  
}


