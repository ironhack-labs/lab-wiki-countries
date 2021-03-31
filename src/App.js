import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';
import countries from './countries.json';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

class App extends React.Component {

  state = { countries: [] }

  componentDidMount() {
    // this.setState({
    //   countries: countries
    // })
    axios.get("http://restcountries.eu/rest/v2/all")
      .then(response => {
          console.log(response.data)
          this.setState({countries: response.data})
          console.log('this.state', this.state.countries)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Navbar className="App-header"/>
  
        <div className="container m-0">
          <div className="row">
            <CountriesList countries={this.state.countries}/>
          
            <Switch>
              <Route exact path='/' component={CountriesList} />
              <Route exact path='/countries/:id' component={CountryDetail}/>
            </Switch>
          </div>
        </div>
  
        <footer className="App-footer sticky-bottom mt-3">
          <p>Ironhack Lab developed by <a className="App-link" href='https://github.com/xavirepi' target='_blank'>Javier Repilado</a> using React <img src={logo} className="App-logo" alt="logo" /></p>
        </footer>
      </div>
    );
  }
}

export default App;
