// import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import data from './countries.json';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react'
const axios = require('axios');

export default class App extends Component {

    state = {
      countries: ''
    }

    // componentDidMount = () => {
    //   this.setState({
    //     countries: data
    //   })
    // }

    componentDidMount() {
      axios.get(`https://countries.tech-savvy.tech/countries`)
        .then(res => {
          const countries = res.data;
          this.setState({ countries });
        })
    }

    render() {
      console.log(this.state)
      return (
        <>
          <div className="App">
            <Navbar />
    
            <div className="container">
              <div className="row">
                <CountriesList countries={data}/>
                <Switch>
                {/* <Route exact path="/countries" component={CountriesList}/> */}
                <Route exact path="/countries/:cca3" component={CountryDetails} countries={data}></Route>
                </Switch>
              </div>
            </div>
          </div>
        </>
      );
    }
}
