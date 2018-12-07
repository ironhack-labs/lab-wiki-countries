import React, { Component } from 'react';
import allCountries from './countries.json';
import Navbar from './Navbar';
import AboutCountry from './AboutCountry';

import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


class Main extends Component {
  state = {
    allCountries : allCountries
  }
    render() {
      const listItems = this.state.allCountries.map((theCountry, index) => { 
       
        return (
          <div key={index}>
            <Link to={"/"+theCountry.cca3}> {theCountry.name.common} </Link>   
          </div>
        )
    })
        return (
          <div>
              < Navbar />

          <div className="col-5 scrollNavDiv">
            {listItems} 
          </div>

            <Switch>
              <Route exact path = '/:cca3' component ={AboutCountry} />
            </Switch>

          </div>
    )
  }
}

export default Main;