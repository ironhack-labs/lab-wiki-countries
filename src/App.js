import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import countries from './countries.json';
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";


export default class App extends Component {

  state = {
    countries: []
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={ this.state.countries } />
            <Switch>
              <Route exact path="/:id" component={ CountryDetails }/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.setState({ countries: countries })
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
