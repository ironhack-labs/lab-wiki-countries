import React, {Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails'

  class App extends Component {
  state = {countries:''}
  
  componentDidMount = async () => {
    const countries = await axios.get("https://countries.tech-savvy.tech/countries")
    this.setState({countries:countries.data})
  }

  render() {
  return (
    <div className="App">
    <Navbar/>
    <div className="container">
      <div className="row">
        <CountriesList countries={this.state.countries} />
        {/* React Router Route rendering the CountryDetails should go here */}
        <Switch>
        <Route exact path='/countries/:cca3' render={(routerProps)=>this.state.countries&&<CountryDetails {...routerProps} countries={this.state.countries} />}/>
      </Switch>
        </div>
      </div>
  </div>
  );
}
  }
export default App;
