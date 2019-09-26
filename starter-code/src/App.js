import React from 'react';
import './App.css';
import data from './countries.json'
import { Route, Switch } from "react-router-dom";
import { Link } from 'react-router-dom'
import CountryDetail from './Components/CountryDetail';

class App extends React.Component {

  // state = {
  //   data
  // }


  render() {

    const countryName = data.map(country => {
      return (
        <li key={country.name.official}>
          <Link to={`/countries/${country.cca3}`}>
            {country.flag} {country.name.official}
          </Link>
        </li>
      )
    })


    return (
      <div className="App">
      <div className="row">

        <div className="col-5">
          <ul>
            {countryName}
          </ul>
        </div>
        <div className="col-7">
          <Switch>
            <Route exact path="/countries/:id" component={CountryDetail} />
          </Switch>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
