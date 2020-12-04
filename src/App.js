import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import countries from './countries.json';
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import Axios from 'axios';


export default class App extends Component {

  state = {
    countries: []
  }

  getCountriesResponse = async () => {
    const countryInfo = await Axios.get('https://countries.tech-savvy.tech/countries');
    this.setState({ countries: countryInfo.data })
  }

  componentDidMount() {
    this.getCountriesResponse()
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={ this.state.countries } />
            <Switch>
              <Route exact path="/:id" countries={ this.state.countries } component={ CountryDetails }/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <div className="container">
//         <div className="row">
//           <CountriesList countries={ countries } />
//           <Route exact path="/:id" component={ CountryDetails }/>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
