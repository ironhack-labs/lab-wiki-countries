import React, { Component } from 'react';
import './App.css';
import countries from './countries.json'
import CountryDetail from './CountryDetail';
import { Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      countries: []
    }
  }

  componentDidMount() {
    this.setState({
      countries: countries
    })
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="row">
          <div className="col-5 style">
            <div className="list-group">
              {this.state.countries.map((elem, idx) => {
                return <Link key={idx} className="list-group-item list-group-item-action" to={elem.cca3}>{elem.flag} {elem.name.common}</Link>
              })}
            </div>ß
          </div>
          <div className="col-7">
            <Switch>
              <Route exact path='/:cca3' component={CountryDetail}  />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
