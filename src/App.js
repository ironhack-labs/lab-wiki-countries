import './App.css';
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import {Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import React, {Component} from 'react'
import axios from "axios";
import logo from './logo.svg';


class App extends Component {  

  state = {
    countries: []
}

  componentDidMount = async () => {
    let response = await axios.get("https://restcountries.eu/rest/v2/all")
    this.setState({
      countries: response.data
    })
  }

  render() {
    if(this.state.countries.length === 0){
      return (
          <div className="App">
             <header className="App-header">
                 <img src={logo} className="App-logo" alt="logo" />
             </header>
          </div>
      )
    }
    return (
    <Switch>
      <div>
        <Navbar />
        My Countries App
        <div style={{display: 'flex'}}>
        <CountriesList countries={this.state.countries}/>
        <Route path={"/country-details/:id"} render={(routeProps) => {
          return <CountryDetails countries={this.state.countries} routeProps={routeProps}/>
          }}/>
         </div>
        </div>
      </Switch>
    );
  }
}

export default App;

