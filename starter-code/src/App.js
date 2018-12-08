import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import countries from './countries.json';
import Slug from './components/Slug/Slug.js';
import CountryDetail from './components/CountryDetail/CountryDetail.js';

class App extends Component {
  render() {

    const slugList = countries.map((country, index) => {
      return <Slug key={index} {...country} />
    })

    return (
      <div className="App">

        <nav className="nav bg-primary mb-3 text-white pl-3">
          <h1>WikiCountries</h1>
        </nav>

        <div className="row">

          <div className="col-5">

            <div className="list-group">
              {slugList}
            </div>

          </div>
          
          <Switch>
            <Route path='/CountryDetail/:cca3' component={CountryDetail}/>
          </Switch>
          
        </div>



      </div>
    );
  }
}

export default App;
