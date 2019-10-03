import React from 'react';
import countries from './countries.json'
import CountryDetail from './CountryDetail'
import {Link, Switch, Route} from 'react-router-dom'
import './App.css';


class App extends React.Component{
  state= {
    AllCountries: countries
  }

  
  getContacts = () => {
    let countriesArray = this.state.AllCountries.map((thisCountries, i) => {
        return (
            <div key={i}>
  
  <p className="list-group-item list-group-item-action">
  <Link to={`/CountryDetail/${thisCountries.cca3}`}> 
  <img id="flags"src={`https://www.countryflags.io/${thisCountries.cca2}/flat/64.png`} alt="didnt load"></img> {thisCountries.name.official}</Link>
   </p>

    </div>
        )
    })
    return countriesArray;
  }






render(){
  return (
    <div className="App">
<div className="list-group">
  <a href="/" className="list-group-item list-group-item-action active">Wiki countries</a>
  <div class="row">
  <div class="col-5">{this.getContacts()}</div>
  <div class="col-7">
  <Switch>
         <Route path="/CountryDetail/:id" component={CountryDetail}/>
         </Switch>
         </div>
</div>
</div>
    </div>
  );
}
}
export default App;
