import React from 'react';
import './App.css';

import allTheCountries from './countries.json';
import {Switch, Route, Link} from 'react-router-dom';
import CountryDetails from './components/countryDetails';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      countries: allTheCountries
    }
  }

  showCountries = () => {
    return this.state.countries.map((eachCountry, index) => {
      return(
        <div key={index}>
          <Link to={'/'+eachCountry.cca3}>
            {eachCountry.name.common}
          </Link>
        </div>
      )
    })
  }

  render(){
    return (
      <div>

        <div style={{width: '40%', float:'left'}}>
        <h1>Countries</h1>
            {this.showCountries()}
        </div>

        <div style={{width: '40%', float: 'right'}}>
            <Switch>
              <Route exact path="/:code" render={(props)=> 
              <CountryDetails 
                  {...props}
                  bunchaCountries = {this.state.countries}
              /> } /> }
            </Switch>
        </div>

      </div>
    );
  }
}

export default App;
