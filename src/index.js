import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Link, Route } from "react-router-dom";
import countries from './countries.json'
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import CountryDetail from './components/CountryDetail/CountryDetail'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      countryList: countries
    }
  }


  showCountries() {
    return  this.state.countryList.map((country, index) => {
      return(
        <Link to={`/${country.cca3}`} key={index} className="list-group-item list-group-item-action">{country.flag} {country.name.common}</Link>
      )
    })
    
  }
  render() {
    return (
      <div className="container border">
        <h1>WikiCountries</h1>
        <div className="row">
        <div className="col-3">
        <div className="list-group">
       {this.showCountries()}
        </div>
        </div>
        <Route
            path="/:id"
            render={() => {
              return  (
                
                <CountryDetail countries={this.state.countryList}/>
                )
              }}
              />
              </div>
      </div>
    );
  }
}

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ),
  document.getElementById('root')
);