import React, { Component } from 'react';
import './App.css';
import data from './countries.json';
import CountryDetail from "./countrydetail/CountryDetail.js";
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {AllTheCountries: data};
  }

  showCountry=()=>{
    return(
      this.state.AllTheCountries.map((eachCountry,i)=>{
        return(
          <Link key={i} className="list-group-item list-group-item-action" exact to={"/"+eachCountry.cca3}> 
          {eachCountry.flag} {eachCountry.name.common}
          </Link>
        )
      })
    )
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="list-group list">
                {this.showCountry()}
              </div>
            </div>
            <div className="col-7">
              <Route exact path='/:CC' component={CountryDetail}/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
