import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';
import { getCountries } from './services/BaseService';
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {

  state = { countries: [] }

  componentDidMount() {
    getCountries()
      .then(allCountries => {
          this.setState({countries: allCountries})
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
              {/* <Route exact path='/countries/:id' component={CountryDetail}/> */}
              <Route exact path='/countries/:id' component={(props) => <CountryDetail {...props} countries={this.state.countries}/> } />
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
