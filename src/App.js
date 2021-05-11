import logo from './logo.svg';
import './App.css';
import countries from './countries.json';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountriesDetails from './components/CountriesDetails/CountriesDetails';

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <CountriesList countries={countries} />
//       <Switch>
//         <Route exact path="/" component={CountriesList} />
//         <Route exact path="/:cca3" component={CountriesDetails} />
//       </Switch>
//     </div>
//   );
// }

import React, { Component } from 'react';

export default class App extends Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    this.setState({
      countries: countries,
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="cont">
            <div>
              <CountriesList countries={countries} />
            </div>

            <div>
              <Switch>
                <Route exact path="/" component={CountriesList} />
                <Route exact path="/:cca3" component={CountriesDetails} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
