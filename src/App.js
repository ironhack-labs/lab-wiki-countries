import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import CountriesList from './components/CoutriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Switch } from 'react-router';
import countriesjson from './countries.json';

class App extends React.Component {

  state = {
    countries: ''
  }
  

  render() {
    return (
      <div className="App">
        <NavBar />
        <CountriesList countries={this.state.countries}/>
        <Switch>
          <Route
            path="/countries/:id"
            render={(historyProps) => {
              return <CountryDetails {...historyProps} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
