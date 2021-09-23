import './App.css';
import NavBar from './components/NavBar/NavBar';
import CountriesList from './components/CountriesList/CountriesList';
import { Switch, Route, Redirect } from 'react-router-dom'
import CountryDetails from './components/CountryDetails/CountryDetails';
import React, {Component} from 'react'

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col-md-5" style={{maxHeight: '90vh', overflow: 'scroll'}} >
              <CountriesList />
            </div>
            <div className="col">
              <Switch>
                <Route path='/:cca3' render={(props) =>
                  <CountryDetails {...props} />} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
