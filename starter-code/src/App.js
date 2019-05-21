import React, { Component, Fragment} from 'react';
import './App.css';
import Countries from './countries'
import CountryDetail from './CountryDetail';
import {Route, Link} from 'react-router-dom'


class App extends Component {
  state={
    Countries: Countries, //can also just be Countries 
  }
  showCountries = () => {
    return this.state.Countries.map((Country, i) => { //go through each country 
    return (
        <Link key={i} to={`/country/${Country.name.common}`} //display this
        className='list-group-item list-group-item-action'>
          {Country.name.common}
        </Link>
      );
    });
  };
  render() {
    return (
    <Fragment>
      <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div className='row'>
        <div className='col-5'>
          <div className='list-group'>
            {this.showCountries()} 
          </div>
        </div>
        <Route path='/country/:id'
        component = {(props)=> <CountryDetail {...props} {...this.state}/>}>
        </Route>
      </div>
    </Fragment>
    
    );
  }
}
//DO NOT FORGET THE () AFTER CALLING FUNCTION IN RETURN
export default App;
