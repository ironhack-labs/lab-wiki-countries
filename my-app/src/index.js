import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Link, Route } from "react-router-dom";
import countries from './Countries.json'
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import CountryDetail from './CountryDetail'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countryList: countries
    }
  }


  showCountries() {
    return this.state.countryList.map((country, index) => {
      return (
        <Link to={`/${country.cca3}`} key={index}
          className="list-group-item list-group-item-action">{country.flag} {country.name.common}</Link>
      )
    })

  }
  render() {
    return (
      <div>
        <h1>Countries</h1>
        <div className="row">
          <div className="col-md-3">
            {this.showCountries()}
          </div>
          <Route
            path="/:id"
            render={() => {
              return (
                <CountryDetail countries={this.state.countryList} />
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