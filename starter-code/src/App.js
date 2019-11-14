import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import countriesList from './countries.json'
import CountrySort from './countries'
import {Route, Switch} from 'react-router-dom'
import Country from './country'


export default function App() {

  let list = countriesList;


    return (
      <div>
        <div className="navbar correctNavbar">
            WikiCountries
        </div>
        <div className = "whole">
    
          <div className="left-side pre-scrollable">
            <CountrySort
              list = {list}
            />
          </div>
    


          <Switch>

          <Route exact path="/country/:id" render ={ props => 
          <Country
          {...props}
          list = {list}
            /> } />

          </Switch> 
    
        </div>
      </div>
    );
}

