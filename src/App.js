import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import {Switch, Route} from 'react-router-dom';
import countriesJson from './countries.json'

import React, { Component } from 'react'

export default class App extends Component {
  state = {
    countries: []
  }

  componentDidMount() {
    this.setState({
      countries: countriesJson
    })
  } 

  render() {
    return (
      <div>
       <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-5">
            <CountriesList />
          </div>
          <div className="col-7">
            <Switch>
              <Route exact path="/country/:cca3" component={CountryDetails} />
            </Switch>
          </div>
       </div>
      </div>
     </div>
   );
  }
}


// import React from 'react';
// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <CountriesList />

//       <Switch>
//         <Route exact path="/country/:cca3" component={CountryDetails} />
//       </Switch>
//     </div>
//   );
// }
// export default App;
