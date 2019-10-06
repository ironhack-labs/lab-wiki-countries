import React, { Component } from 'react';
import countries from './countries.json';
import CountryDetail from './components/CountryDetail.js';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
constructor(props){
  super(props)
  this.state = {
    allCountries : countries,
  }
}

render(){

  return (
    <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="conatainer">
              <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="container">
            <div className="row">
                <div className="col-5" style={{maxHeight:'90vh', overflow:'scroll'}}>
                  <div className="list-group">
                    {this.state.allCountries.map((country,index)=>{
                          return(
                            <div key={index}>
                                  <Link className="list-group-item list-group-item-action" to={`/detail/${country.cca3}`}> {country.flag} {country.name.common}</Link>
                            </div>
                          )
                        })}
                    </div>
                </div>
                <div className="col-7">
                    <Switch>
                    <Route path='/detail/:code' component = {(props)=> <CountryDetail {...props} list={this.state.allCountries}/>}/>
                    </Switch>
                </div>
            </div>
          </div>
    </div>
  );
}
}
export default App;
