import React, { Component } from 'react';
import CountryDetails from './components/CountryDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import countries from './countries.json';
import { Link, Route } from "react-router-dom";



class App extends Component {

  state = {
      listCountries: countries,
    }

    renderCountryDetails = (props) => {
      console.log('Props match:', props.match.params )
      return <CountryDetails ID={ props.match.params.id } countries= { this.state.listCountries } />;  // how to match the path in Route component ==> https://reacttraining.com/react-router/web/api/match
    };           

  render() {
    return (
      <div className="App">
        <div id="root">
            <div>
              <nav class="navbar navbar-dark bg-primary mb-3">
                <div class="container">
                  <Link class="navbar-brand" to="/">WikiCountries</Link>
                </div>
              </nav>
              <div class="container">
                <div class="row">
                  <div class="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                    <div class="list-group">
                      { this.state.listCountries.map((info, i) => 
                        <Link to={info.cca3} key={i} className="list-group-item list-group-item-action">
                          {info.flag} {info.name.common}
                        </Link>
                      )}
                    </div>
                  </div>
                  <Route exact path='/:id' render={ this.renderCountryDetails }/>
                    {/* render a function in route ==> https://reacttraining.com/react-router/web/api/Route/render-func */}
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
