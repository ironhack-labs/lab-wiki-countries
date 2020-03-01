import React, { Component, useState, useEffect }  from 'react';
import './App.css';

import countries from './countries.json';

import { Switch, Route } from 'react-router-dom';

import CountryDetail from './components/CountryDetail';
import CountryCard from './components/CountryCard';

class App extends Component {
  state = {
    data: [],
    country: countries[0]
  }
  
   componentDidMount() {
    // axios.get('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
    //   .then(res => {
    //     this.setState({country: res.data.results})
    //   })
    //   .catch(err => console.error(err))
    //this.setState({data:countries})
  }


  render() {
    //console.log(this.state.data)
    return (
      <>
     {/* ß */}
        <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5" >
              <div className="list-group">
              {
                countries.map((e,i) => {
                  console.log(e)
                  return <a key={i} className="list-group-item list-group-item-action" href="/ABW">🇦🇼 Aruba</a>

                })
              }
              </div>
            </div>
          <CountryCard country={this.state.country} />
          </div>
        </div>
      </div>
    </>
    );
  }
}

export default App;
