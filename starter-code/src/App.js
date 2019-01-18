import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './index.sass';
import countries from './countries';
import Header from './components/Header';
import Container from './components/Container';
import CountryList from './components/CountryList';
import Home from './pages/Home';
import CountryDetail from './pages/CountryDetail';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header title="WikiCountries"/>
        <Container>
          <CountryList countries={countries}/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/countries/:code' component={CountryDetail}/>
            {/* <CountryDetail key={c.ccn3} country={c}></CountryDetail> */}
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
