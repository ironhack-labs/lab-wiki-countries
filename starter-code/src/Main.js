import React, { Component } from 'react';
import allCountries from './countries.json';
import Navbar from './Navbar';
import CountryDetails from './CountryDetails';

import { Switch, Route, Link } from 'react-router-dom';


class Main extends Component {
  state = {
    allCountries : allCountries
  }

  // Nick created a function to "show countries" instead of putting the logic in the render like I did, both ways work.

  // showAllTheCountries = () => {
  //    return this.state.allCountries.map((eachCountry, index)=> {
  //        return (
  //          <link key={index} to="{eachCountry.cca3}">
  //            {eachCountry.name.common} 
  //          </link>
  //        )   
  //})
  // }

    render() {
      const listItems = this.state.allCountries.map((theCountry, index) => {  // loop
       
        return (
          <div key={index}>
            <Link to={theCountry.cca3}> {theCountry.name.common} </Link>   
          </div>
        )
    })
        return (
        <div>
              < Navbar />

          <div class="container">
            <div class="row">
              <div className="col-5 scrollNavDiv">
                {listItems} 
              </div>

              <Switch>  
                {/* using ROUTE automatically creates a this.props.params the "variable" 
                    that we give in the path will determine what goes at the end of 
                    this.props.params.VARIABLE */}
            {/*     |                  |                           */}
            {/*     V                  V                           */}
                <Route exact path = '/:id' component ={CountryDetails} />
              </Switch>

            </div>
          </div>
      </div>
    )
  }
}

export default Main;