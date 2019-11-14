import React from 'react';
import './App.css';
import {Link, Switch, Route} from 'react-router-dom';
import countries from './countries.json';
import CountryDetail from './components/country-detail-component/country-detail';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      countriesList:countries
    }
  }
  displayCountries = () => {
    return this.state.countriesList.map((country,index) => {
      return (
          <Link key={index} to={'/country-detail/'+ country.cca3} className="list-group-item list-group-item-action">{country.flag} {country.name.common}</Link>
      )
    });
  }
  render() {
    return (
      <div>        
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
  
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 country-list" >
              <div className="list-group">
                {this.displayCountries()}
              </div>
            </div>
            <div className="col-9 country-desc">
              <Switch>
                 <Route exact path='/country-detail/:cca3' render = { (props) => <CountryDetail {...props} countriesList = {this.state.countriesList} /> } />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
