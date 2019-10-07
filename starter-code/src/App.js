import React, {Component, Fragment} from 'react';
import { Switch, Route } from 'react-router-dom';
import Details from './Details'
import countries from './countries.json'
import { Link } from 'react-router-dom'

import './App.css';

class App extends Component{

  showCountries = () =>{
    let allCountries = countries.map((eachCountry, i) =>{
      return (<li key={i} className="list-group-item list-group-item-action">
        <Link to ={`/country-detail/${eachCountry.flag}`}>{eachCountry.name.common} {eachCountry.flag}</Link>
      </li>
      )
    })
    return allCountries
  }

  render(){
  return (
    <Fragment>
    <div className="row">
      <div className="col-5">
      List
      {this.showCountries()}
      </div>
    <Switch>
      <Route exact path='/country-detail/:id' component={Details}/>
    </Switch>
    </div>


    </Fragment>
  );
}
}
export default App;
