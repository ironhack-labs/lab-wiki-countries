import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';

class App extends React.Component {
   render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={CountriesList} exact />
          <Route path="/:id" component={CountryDetails} exact />
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}
export default App;
