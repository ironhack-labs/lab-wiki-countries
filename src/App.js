import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import countriesData from './countries.json'

import React, { Component } from 'react'

export default class App extends Component {
  state = {
    countries: []
  }
  componentDidMount() {
    this.setState({
      countries: countriesData
    })
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-5">
              <CountriesList countries={ this.state.countries } />
            </div>
            <div className="col-7">
              <Route exact path='/countries/:id' render={ (props) => <CountryDetails { ...props } countries={ this.state.countries } /> } />
            </div>
          </div>
        </div>
      </div>
    )
  }
}




// function App() {
//   return (
//     <div>
//      
//     </div>
//   );
// }

