import React, {Component} from 'react';
import { Route, Switch } from 'react-router';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import CountriesDetails from './Components/CountryDetails';

class App extends Component {
  render (){
    return (
      <div className="App">
        <Navbar/>
        <div className="dashboard">
          <CountriesList />
          <Switch>
            <Route exact
              path="/country/:cca3"
              render={(historyProps) => {
                return <CountriesDetails {...historyProps}/>
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }

}

export default App;
